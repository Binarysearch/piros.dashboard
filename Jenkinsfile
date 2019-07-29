pipeline {
    agent {
        docker {
            image 'binarysearch/node-chrome-headless-alpine:1.0.1'
        }
    }
    environment {
        NPM_USER = 'binarysearch'
        NPM_EMAIL = 'desenlace.net@gmail.com'
        DOCKER_USER = 'binarysearch'
    }
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build lib') {
            steps {
                sh 'npm run build:lib'
            }
        }
        stage('Build app') {
            steps {
                sh 'npm run build:app'
            }
        }
        stage('Test lib') {
            steps {
                sh 'npm run test:lib'
            }
        }
        stage('Test app') {
            steps {
                sh 'npm run test:app'
            }
        }
        stage('Deliver lib') {
            when {
                expression {
                    return env.BRANCH_NAME == env.TAG_NAME
                }
            }
            steps {
                script {
                    sh 'npm install -g npm-cli-login publish'
                    withCredentials([string(credentialsId: 'npm-password', variable: 'NPM_PASSWORD')]) {
                        sh 'npm-cli-login -u ${NPM_USER} -p ${NPM_PASSWORD} -e ${NPM_EMAIL}'
                    }
                    sh 'npm run publish:lib'
                }
            }
        }
        stage('Deliver app') {
            when {
                expression {
                    return env.BRANCH_NAME == env.TAG_NAME
                } 
            }
            steps {
                script {
                    withCredentials([string(credentialsId: 'docker-password', variable: 'DOCKER_PASS')]) {
                        sh 'docker login --username=${DOCKER_USER} --password=${DOCKER_PASS}'
                    }
                    sh 'docker build --rm --build-arg app_version_arg=${TAG_NAME} -f Dockerfile -t binarysearch/piros-dashboard:${TAG_NAME} .'
                    sh 'docker push binarysearch/piros-dashboard:${TAG_NAME}'
                    sh 'docker container rm piros-dashboard -f || true'
                    sh 'docker run -d --network=dev_enviroment_default --network-alias=piros-dashboard --name=piros-dashboard binarysearch/piros-dashboard:${TAG_NAME}'
                }
            }
        }

    }
}