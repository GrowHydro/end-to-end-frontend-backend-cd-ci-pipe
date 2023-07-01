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