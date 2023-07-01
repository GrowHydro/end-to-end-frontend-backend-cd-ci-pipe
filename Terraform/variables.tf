variable "db_password" {
  type        = string
  description = "Password for Postgresdb."
  sensitive = true
}

variable "region" {
  type        = string
  description = "Region to deploy infrastructure into."
}

variable "azs" {
    type = list(string)
    description = "Availability zones for creation in VPC."
    default = [ "us-east-1a", "us-east-1b", "us-east-1c", "us-east-1d" ]
}

variable "default_route" {
  type = string
  description = "Default route for ig"
}

variable "avail_zone_1" {
  type = string
  description = "Availability zone os public subnet"
}

variable "avail_zone_2" {
  type = string
  description = "Availability zone of backup public subnet"
}

variable "avail_zone_3" {
  type = string
  description = "Availability zone of private subnet"
}

variable "avail_zone_4" {
  type = string
   description = "Availability zone of backup private subnet"
}