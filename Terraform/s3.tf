resource "aws_s3_bucket" "codepipeline_artifacts" {
  bucket = "${var.company}-pipeline-artifacts"
  acl    = "private"
}

# resource "aws_s3_bucket_policy" "bucket_policy" {
#   bucket = aws_s3_bucket.front-end.id
#   policy = jsonencode({
#     Version = "2012-10-17"
#     Statement = [
#       {
#         Sid       = "PublicReadGetObject"
#         Effect    = "Allow"
#         Principal = "*"
#         Action    = "s3:*"
#         Resource  = "*"
#       },
#     ]
#   })
# }

# resource "aws_s3_bucket_public_access_block" "this" {
#   bucket = "${aws_s3_bucket.front-end.bucket}"

#   block_public_acls       = true
#   block_public_policy     = true
#   ignore_public_acls      = true
#   restrict_public_buckets = true
# }
