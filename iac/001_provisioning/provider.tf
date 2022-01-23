terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }

  backend "s3" {
    dynamodb_table          = "demo-tfstate-lock-db"
    bucket                  = "demo-tfstate-state-bucket"
    key                     = "origin_group_demo.tfstate"
    region                  = "ap-southeast-1"
    shared_credentials_file = "~/.aws/credentials"
    profile                 = "demo_aws_profile"
  }
}

provider "aws" {
  region                  = "ap-southeast-1"
  shared_credentials_file = "~/.aws/credentials"
  profile                 = "demo_aws_profile"

  tags = {
    Owner       = "cf_demo_boss"
    Project     = "cf_origin_group_demo"
  }
}

provider "aws" {
  alias                   = "failover_region"
  region                  = "ap-northeast-1"
  shared_credentials_file = "~/.aws/credentials"
  profile                 = "demo_aws_profile"

  tags = {
    Owner       = "cf_demo_boss"
    Project     = "cf_origin_group_demo"
  }
}