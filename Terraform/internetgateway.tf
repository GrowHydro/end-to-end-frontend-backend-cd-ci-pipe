resource "aws_internet_gateway" "gw" {
    
    depends_on = [ aws_vpc.main ]

    vpc_id = aws_vpc.main.id
   
}