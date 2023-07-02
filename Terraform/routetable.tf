##
# PUBLIC
##

resource "aws_route_table" "public" {
  depends_on = [ aws_vpc.main, aws_internet_gateway.gw]
  
  vpc_id = aws_vpc.main.id
}


resource "aws_route" "default_public" {
  route_table_id         = aws_route_table.public.id
  destination_cidr_block = var.default_route
  gateway_id             = aws_internet_gateway.gw.id
}

resource "aws_route_table_association" "public" {
  depends_on = [ aws_subnet.public, aws_route_table.public]
  subnet_id      = aws_subnet.public.id
  route_table_id = aws_route_table.public.id
}

##
# PRIVATE
##

resource "aws_route_table" "private" {
  depends_on = [aws_vpc.main, aws_internet_gateway.gw]

  vpc_id = aws_vpc.main.id
  
}

resource "aws_route" "private" {
  route_table_id = aws_route_table.private.id
  destination_cidr_block = var.default_route
  nat_gateway_id = aws_nat_gateway.nat-gw.id
}

resource "aws_route_table_association" "private" {
  depends_on = [aws_subnet.private,aws_route_table.private]
  route_table_id = aws_route.private.id
  subnet_id = aws_subnet.private.id
}

##    
#     Nat #possibly duplicate to Private?
#
##

# resource "aws_route_table" "nat" {
#   depends_on = [ aws_vpc.main, aws_nat_gateway.nat-gw ]

#   vpc_id = aws_vpc.main.id
# }

# resource "aws_route" "nat" {
#   route_table_id = aws_route_table.nat.id
#   destination_cidr_block = var.default_route
#   gateway_id = aws_nat_gateway.nat-gw.id
# }

# resource "aws_route_table_association" "nat_to_private" {
#   depends_on = [ aws_subnet.private, aws_route_table.nat ]
#   subnet_id = aws_subnet.private.id
#   route_table_id = aws_route_table.nat.id
# }
