resource "aws_iam_role" "pipe_role" {
  name = "${var.company}-pipe_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Sid    = ""
        Principal = {
          Service = "codepipeline.amazonaws.com"
        }
      }
    ]
  })

}
# resource "aws_iam_role" "pipe_role_2" {
#   name = "${var.company}-pipe_role"

#   assume_role_policy = jsonencode({
#     Version = "2012-10-17"
#     Statement = [
#       {
#         Action = "sts:AssumeRole"
#         Effect = "Allow"
#         Sid    = ""
#         Principal = {
#           Service = "iam.amazonaws.com"
#         }
#       }
#     ]
#   })

# }

data "aws_iam_policy_document" "pipeline-policy-document" {
  statement {
    sid = "1"
    actions   = ["codestar-connections:UseConnection"]
    resources = ["*"]
    effect    = "Allow"
  }

  statement {
    sid     = ""
    actions = ["cloudwatch:*", "s3:*", "codebuild:*", "iam:*"]
    resources = ["*"]
    effect  = "Allow"
  }

}

resource "aws_iam_policy" "pipeline-policy" {
  name        = "${var.company}-pipeline-policy"
  path        = "/"
  description = "Pipeline policy"
  policy      = data.aws_iam_policy_document.pipeline-policy-document.json
}

# resource "aws_iam_role_policy_attachment" "pipe-attachment-2" {
#   policy_arn = aws_iam_policy.pipeline-policy.arn
#   role       = aws_iam_role.pipe_role_2.id
# }

resource "aws_iam_role_policy_attachment" "pipe-attachment" {
  policy_arn = aws_iam_policy.pipeline-policy.arn
  role       = aws_iam_role.pipe_role.id
}

resource "aws_iam_role_policy_attachment" "pipe-fullaccess_attachment" {
  policy_arn = "arn:aws:iam::aws:policy/PowerUserAccess"
  role       = aws_iam_role.pipe_role.id
}

##
# CODEBUILD
##

resource "aws_iam_role" "codebuild_role" {
  name = "${var.company}-codebuild-role"
  
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Sid    = ""
        Principal = {
          Service = "codebuild.amazonaws.com"
        }
      },
    ]
  })
#   assume_role_policy = <<EOF
#     {
#   "Version": "2012-10-17",
#   "Statement": [
#     {
#       "Action": "sts:AssumeRole",
#       "Principals": {
#         "Service": "codebuild.amazonaws.com",
#         "AWS": "arn:aws:iam::373157733381:user/architect"
#       },
#       "Effect": "Allow",
#       "Sid": ""
#     }
#   ]
# }

#   EOF
}

data "aws_iam_policy_document" "codebuild-policy" {
  statement {
    sid       = ""
    actions   = ["logs:*", "s3:*", "codebuild:*", "secretsmanager:*", "iam:*", "ecs:*", "apigateway:*", "lambda:*"]
    resources = ["*"]
    effect    = "Allow"
  }

}

resource "aws_iam_policy" "codebuild-policy" {
  name        = "${var.company}-codebuild-policy"
  
  description = "Codebuild policy"
  policy      = data.aws_iam_policy_document.codebuild-policy.json
}

resource "aws_iam_role_policy_attachment" "codebuild-attachment" {
  policy_arn = aws_iam_policy.codebuild-policy.arn
  role       = aws_iam_role.codebuild_role.id
}

resource "aws_iam_role_policy_attachment" "fullaccess_attachment" {
  policy_arn = "arn:aws:iam::aws:policy/IAMFullAccess"
  role       = aws_iam_role.codebuild_role.id
}

# resource "aws_iam_role_policy_attachment" "codebuild-attachment-iam" {
#   policy_arn = aws_iam_policy.codebuild-policy.arn
#   role       = aws_iam_role.codebuild_role_2.id
# }

# resource "aws_iam_role" "codebuild_role_2" {
#   name = "${var.company}-codebuild-role"
#   assume_role_policy = jsonencode({
#     Version = "2012-10-17"
#     Statement = [
#       {
#         Action = "sts:AssumeRole"
#         Effect = "Allow"
#         Sid    = ""
#         Principal = {
#           Service = "iam.amazonaws.com"
#         }
#       },
#     ]
#   })
# }