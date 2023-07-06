variable "front_end_repo_id" {
  type        = string
  description = "Full name of github repository"
}

variable "repo_branch_name" {
  type        = string
  description = "Branch name of repo to watch"
}

variable "company" {
  type        = string
  description = "Name of company owing infrastructure."
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

variable "pipeline_bucket_name" {
  type        = string
  description = "Name of Artifact for front-end s3 bucket"
}

variable "env" {
  type = string
  description = "Name of environment of infrastructure."
}