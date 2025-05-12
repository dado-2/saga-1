pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/dado-2/saga-1.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
    }

    post {
        success {
            echo '🎉 Build and tests completed successfully!'
        }
        failure {
            echo '❌ Something went wrong during the build or test.'
        }
    }
}
