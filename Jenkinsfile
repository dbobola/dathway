pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Terraform Apply') {
      environment {
        ARM_SUBSCRIPTION_ID = credentials('azure-subscription-id')
        ARM_CLIENT_ID       = credentials('azure-client-id')
        ARM_CLIENT_SECRET   = credentials('azure-client-secret')
        ARM_TENANT_ID       = credentials('azure-tenant-id')
      }

      steps {
        sh 'terraform init'
        sh 'terraform plan'
        sh 'terraform apply --auto-approve'
      }
    }

    stage('Build and Deploy') {
      agent {
        docker {
          image 'your-docker-image:latest'
          args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
      }

      steps {
        sh 'docker build -t your-docker-image .'
        sh 'docker run -d -p 80:80 your-docker-image'
        sh 'kubectl apply -f deployment.yaml'
      }
    }
  }
}
