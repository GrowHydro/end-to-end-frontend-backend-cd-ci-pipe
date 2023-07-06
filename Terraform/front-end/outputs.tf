output "static_website_endpoint" {
  description = "static s3 application bucket endpoint"
  value       = aws_s3_bucket.front_end.website_endpoint
}

output "cf_id" {
  value       = try(aws_cloudfront_distribution.website_cdn.id, "")
  description = "ID of AWS CloudFront distribution"
}

output "cf_arn" {
  value       = try(aws_cloudfront_distribution.website_cdn.arn, "")
  description = "ARN of AWS CloudFront distribution"
}

output "cf_status" {
  value       = try(aws_cloudfront_distribution.website_cdn.status, "")
  description = "Current status of the distribution"
}

output "cf_domain_name" {
  value       = try(aws_cloudfront_distribution.website_cdn.domain_name, "")
  description = "Domain name corresponding to the distribution"
}

