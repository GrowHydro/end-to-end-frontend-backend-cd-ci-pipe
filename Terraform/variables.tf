variable "db_password" {
  type        = string
  description = "Password for Postgresdb."
  sensitive   = true
}

variable "region" {
  type        = string
  description = "Region to deploy infrastructure into."
}

# variable "azs" {
#   type        = list(string)
#   description = "Availability zones for creation in VPC."
#   default     = ["us-east-1a", "us-east-1b", "us-east-1c", "us-east-1e"]
# }

variable "default_route" {
  type        = string
  description = "Default route for ig"
}

variable "avail_zone_1" {
  type        = string
  description = "Availability zone os public subnet"
}

variable "avail_zone_2" {
  type        = string
  description = "Availability zone of backup public subnet"
}

variable "avail_zone_3" {
  type        = string
  description = "Availability zone of private subnet"
}

variable "avail_zone_4" {
  type        = string
  description = "Availability zone of backup private subnet"
}

variable "private_route" {
  type        = string
  description = "Route for private subnet"

}

variable "dockerhub_credentials" {
  type        = string
  description = "URL to ARN of secrets manager."
  sensitive   = true
}

variable "codestar_connector_credentials" {
  type        = string
  description = "ARN of codestar connector"
}

variable "env" {
  type        = string
  description = "Environment of infrastructure."
}

variable "company" {
  type        = string
  description = "Name of organization owning resources"
}

variable "access_key" {
  type        = string
  description = "AWS Access Key to AWS resources"
  sensitive   = true
}

variable "secret_key" {
  type        = string
  description = "AWS Secret Key"
  sensitive   = true
}

variable "aws_account" {
  type        = string
  description = "AWS account number"
  sensitive   = true
}

variable "pipeline_bucket_name" {
  type        = string
  description = "Name of Artifact for front-end s3 bucket"
}

