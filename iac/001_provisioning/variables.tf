variable "project_name" {
  type        = string
  description = "The name that you'd like to assign to the project"

  validation {
    condition     = length(var.project_name) > 0 && regex("^[a-z0-9-]+$", var.project_name)
    error_message = "Project name is required and must only contain lowercase alphanumeric chacters or a dash (a-z, 0-9, and -)."
  }
}

variable "host_name" {
  type = string
  description = "Host name of project eg. stackoverflow.com, google.com"

  validation {
    condition     = length(var.host_name) > 0
    error_message = "Host name is required."
  }
}

variable sub_domain {
  type = string
  description = "Subdomain of project eg. dev.stackoverflow, prd.stackoverflow.com"

  validation {
    condition     = length(var.sub_domain) > 0
    error_message = "Sub-domain is required."
  }
}

variable "environment" {
  type = string
  description = "Name of environment (dev, uat, prd)"

  validation {
    condition     = contains(["dev", "uat", "prd"], var.environment)
    error_message = "Environment parameter should be dev, uat or prd"
  }
}

variable "acm_cert_arn" {
  type = string
  description = "ACM certificate ARN"

  validation {
    condition     = length(var.acm_cert_arn) > 0
    error_message = "The ARN of the ACM certification is required."
  }
}
