pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS=credentials('dockerhub-cred')
    }
    stages {
        stage("Verify tooling") {
            steps {
                sh '''
                    docker version
                    docker info
                '''
            }
        }
        stage("Prune docker data") {
            steps {
                sh 'docker system prune -a --volumes -f'
                sh 'docker image prune'
            }
        }
        stage("Build image") {
            steps {
                sh 'docker build -t addr0x414b/quote-app-client:latest quote-app'
                sh 'docker image ls'
            }
        }
        stage("Login to Dockerhub") {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage("Push to Dockerhub") {
            steps {
                sh 'docker push addr0x414b/quote-app-client:latest'
            }
        }
        stage("Run on production server") {
            steps {
                sshagent(['prod-server']) {
                    sh 'ssh -o StrictHostKeyChecking=no ec2-user@ec2-54-176-65-224.us-west-1.compute.amazonaws.com docker run -p 80:80 -d -name quote-app-client addr0x414b/quote-app-client:latest'
                }

            }
        }
    }
    post {
        always {
            sh 'docker logout'
        }
    }
}