#    ____          _____ 
#   / __ \   /\   |_   _|
#  | |  | | /  \    | |  
#  | |  | |/ /\ \   | |  
#  | |__| / ____ \ _| |_ 
#   \____/_/    \_\_____|

resource "aws_cloudfront_origin_access_identity" "website_oai" {
  comment = join("", ["Origin access identity of ", var.project_name, " Cloudfront."])
}

#   __  __       _          _____ ____  
#  |  \/  |     (_)        / ____|___ \ 
#  | \  / | __ _ _ _ __   | (___   __) |
#  | |\/| |/ _` | | '_ \   \___ \ |__ < 
#  | |  | | (_| | | | | |  ____) |___) |
#  |_|  |_|\__,_|_|_| |_| |_____/|____/ 

resource "aws_s3_bucket" "main_bucket" {
  bucket = join("-", [var.project_name, "website-main-s3"])
  acl    = "private"

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }

  routing_rules = <<EOF
    [{
        "Condition": {
          "HttpErrorCodeReturnedEquals": "404"
        },
        "Redirect": {
          "ReplaceKeyWith": "index.html"
        }
    }]
  EOF

  tags = {
    Name        = join("-", [var.project_name, "website-main-s3"])
    Environment = var.environment
  }
}

resource "aws_s3_bucket_public_access_block" "main_bucket_access_block" {
  bucket = aws_s3_bucket.main_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

data "aws_iam_policy_document" "main_s3_iam_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.main_bucket.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.website_oai.iam_arn]
    }
  }
}

resource "aws_s3_bucket_policy" "main_s3_policy" {
  bucket = aws_s3_bucket.main_bucket.id
  policy = data.aws_iam_policy_document.main_s3_iam_policy.json
}

#   ______    _ _                        _____ ____  
#  |  ____|  (_) |                      / ____|___ \ 
#  | |__ __ _ _| | _____   _____ _ __  | (___   __) |
#  |  __/ _` | | |/ _ \ \ / / _ \ '__|  \___ \ |__ < 
#  | | | (_| | | | (_) \ V /  __/ |     ____) |___) |
#  |_|  \__,_|_|_|\___/ \_/ \___|_|    |_____/|____/ 

resource "aws_s3_bucket" "fail_over_bucket" {
  provider  = "aws.failover_region"
  bucket    = join("-", [var.project_name, "website-failover-s3"])
  acl       = "private"

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }

  routing_rules = <<EOF
    [{
        "Condition": {
          "HttpErrorCodeReturnedEquals": "404"
        },
        "Redirect": {
          "ReplaceKeyWith": "index.html"
        }
    }]
  EOF

  tags = {
    Name        = join("-", [var.project_name, "website-failover-s3"])
    Environment = var.environment
  }
}

resource "aws_s3_bucket_public_access_block" "failover_bucket_access_block" {
  bucket = aws_s3_bucket.fail_over_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

data "aws_iam_policy_document" "failover_s3_iam_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.fail_over_bucket.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.website_oai.iam_arn]
    }
  }
}

resource "aws_s3_bucket_policy" "failover_s3_policy" {
  bucket = aws_s3_bucket.fail_over_bucket.id
  policy = data.aws_iam_policy_document.failover_s3_iam_policy.json
}

#    _____ _                 _ ______               _   
#   / ____| |               | |  ____|             | |  
#  | |    | | ___  _   _  __| | |__ _ __ ___  _ __ | |_ 
#  | |    | |/ _ \| | | |/ _` |  __| '__/ _ \| '_ \| __|
#  | |____| | (_) | |_| | (_| | |  | | | (_) | | | | |_ 
#   \_____|_|\___/ \__,_|\__,_|_|  |_|  \___/|_| |_|\__|

resource "aws_cloudfront_distribution" "website_cdn" {
  // Setup Data
  enabled             = true
  is_ipv6_enabled     = true
  comment             = join("", ["CF distribution for ", var.project_name])
  default_root_object = "index.html"
  price_class         = "PriceClass_All"

  aliases = [var.subdomain]

  // Geo-restrictions
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  // Origin buckets
  origin {
    domain_name = aws_s3_bucket.main_bucket.bucket_regional_domain_name
    origin_id   = "main-s3"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.default.cloudfront_access_identity_path
    }
  }

  origin {
    domain_name = aws_s3_bucket.fail_over_bucket.bucket_regional_domain_name
    origin_id   = "failover-s3"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.default.cloudfront_access_identity_path
    }
  }

  # Origin group definition
  origin_group {
    origin_id = join("-", [var.project_name, "website-origin-group"])

    failover_criteria {
      status_codes = [403, 404, 500, 502]
    }

    member {
      origin_id = "main-s3"
    }

    member {
      origin_id = "failover-s3"
    }
  }

  # CDN Behaviour
  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = join("-", [var.project_name, "website-origin-group"])

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  # SSL Certificate Integration
  viewer_certificate {
    cloudfront_default_certificate = false
    acm_certificate_arn            = var.acm_cert_arn
    ssl_support_method             = "sni-only"
  }

  # Tags
  tags = {
    Name        = join("-", [var.project_name, "cf-distribution"])
    Environment = var.environment
  }
}

#   _____  _   _  _____ 
#  |  __ \| \ | |/ ____|
#  | |  | |  \| | (___  
#  | |  | | . ` |\___ \ 
#  | |__| | |\  |____) |
#  |_____/|_| \_|_____/ 

data "aws_route53_zone" "base_zone" {
  name = var.host_name
}

resource "aws_route53_record" "cname" {
  zone_id = data.aws_route53_zone.base_zone.zone_id
  name    = var.sub_domain
  type    = "CNAME"
  ttl     = "300"
  records = [
    aws_cloudfront_distribution.website_cdn.domain_name
  ]
}