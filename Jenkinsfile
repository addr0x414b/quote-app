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
        stage("Build client image") {
            steps {
                sh 'docker build -t addr0x414b/quote-app-client:latest quote-app'
                sh 'docker image ls'
            }
        }
        stage("Build server image") {
            steps {
                sh 'docker build -t addr0x414b/quote-app-server:latest server'
                sh 'docker image ls'
            }
        }
        stage("Login to Dockerhub") {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage("Push client to Dockerhub") {
            steps {
                sh 'docker push addr0x414b/quote-app-client:latest'
            }
        }
        stage("Push server to Dockerhub") {
            steps {
                sh 'docker push addr0x414b/quote-app-server:latest'
            }
        }
        stage("Run client on production server") {
            steps {
                sshagent(['prod-server']) {
                    sh 'ssh -o StrictHostKeyChecking=no ec2-user@ec2-54-176-65-224.us-west-1.compute.amazonaws.com sudo docker ps -f name=quote-app-client -q | xargs --no-run-if-empty sudo docker container stop'
                    sh 'ssh -o StrictHostKeyChecking=no ec2-user@ec2-54-176-65-224.us-west-1.compute.amazonaws.com sudo docker container ls -a -fname=quote-app-client -q | xargs -r sudo docker container rm'
                    sh 'ssh -o StrictHostKeyChecking=no ec2-user@ec2-54-176-65-224.us-west-1.compute.amazonaws.com sudo docker run -p 80:80 -d --name quote-app-client addr0x414b/quote-app-client:latest'
                }

            }
        }
        stage("Run server on production server") {
            steps {
                sshagent(['prod-server']) {
                    sh 'ssh -o StrictHostKeyChecking=no ec2-user@ec2-54-176-65-224.us-west-1.compute.amazonaws.com sudo docker ps -f name=quote-app-server -q | xargs --no-run-if-empty sudo docker container stop'
                    sh 'ssh -o StrictHostKeyChecking=no ec2-user@ec2-54-176-65-224.us-west-1.compute.amazonaws.com sudo docker container ls -a -fname=quote-app-server -q | xargs -r sudo docker container rm'
                    sh 'ssh -o StrictHostKeyChecking=no ec2-user@ec2-54-176-65-224.us-west-1.compute.amazonaws.com sudo docker run -p 3000:3000 -d --name quote-app-server addr0x414b/quote-app-server:latest'
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