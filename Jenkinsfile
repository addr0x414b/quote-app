pipeline {
    agent any
    stages {
        stage("Verify tooling") {
            steps {
                sh '''
                    docker version
                    docker info
                    docker-compose version
                    curl --version
                    jq --version
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
                sh 'docker build -t quote-app-client quote-app'
                sh 'docker image ls'
            }
        }
        stage("Run client") {
            steps {
                sh 'docker run -d -p 80:80 quote-app-client'
            }
        }
    }
    post {
        always {
            sh 'docker container stop $(docker container list -q)'
            sh 'docker container ls'
        }
    }
}