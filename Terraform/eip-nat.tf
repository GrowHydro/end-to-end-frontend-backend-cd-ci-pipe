resource "aws_eip" "elasticip" {
  vpc = true
  depends_on = [ aws_vpc.main ]
}

resource "aws_nat_gateway" "nat-gw" {
  depends_on = [ aws_subnet.public, aws_eip.elasticip ]

  allocation_id = aws_eip.elasticip.id
  subnet_id = aws_subnet.public.id
  
}