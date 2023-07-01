resource "aws_db_parameter_group" "homegrown" {
  name   = "homegrown-parameter-gp"
  family = "postgres14"

  parameter {
    name  = "log_connections"
    value = "1"
  }
}

resource "aws_db_instance" "homegrown" {
  identifier             = "homegrown"
  instance_class         = "db.t3.micro"
  allocated_storage      = 5
  engine                 = "postgres"
  engine_version         = "14.1"
  username               = "homegrown"
  password               = var.db_password
  db_subnet_group_name   = aws_db_subnet_group.hydro.name
  vpc_security_group_ids = [aws_security_group.rds.id]
  parameter_group_name   = aws_db_parameter_group.homegrown.name
  publicly_accessible    = true
  skip_final_snapshot    = true
}