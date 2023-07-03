resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true
}


resource "aws_db_subnet_group" "hydro" {
  name       = "homegrown-hydro"
  subnet_ids = [aws_subnet.public.id, aws_subnet.secondary.id, aws_subnet.private.id, aws_subnet.secondary-private.id]

}

