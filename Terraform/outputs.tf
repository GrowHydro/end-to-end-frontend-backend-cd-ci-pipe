output "rds_hostname" {
  description = "RDS instance hostname"
  value       = aws_db_instance.homegrown.address
  sensitive   = true
}

output "rds_port" {
  description = "RDS instance port"
  value       = aws_db_instance.homegrown.port
  sensitive   = true
}

output "rds_username" {
  description = "RDS instance root username"
  value       = aws_db_instance.homegrown.username
  sensitive   = true
}

output "static_website_endpoint" {
  description = "static s3 application bucket endpoint"
  value       = aws_s3_bucket.front-end.website_endpoint
}