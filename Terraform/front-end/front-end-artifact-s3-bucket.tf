resource "aws_s3_bucket" "pipeline_bucket" {
  bucket        = var.pipeline_bucket_name
  force_destroy = true

  cors_rule {
    allowed_methods = ["GET", "PUT", "POST", "DELETE", "HEAD"]
    allowed_origins = ["*"]
    allowed_headers = ["*"]
  }
  versioning {
    enabled = true
  }

}