resource "aws_lambda_function" "api-exe"{

    environment {
      variables = {
        DB_INSTANCE_ADDRESS = aws_db_instance.homegrown.address
      }
    }
}