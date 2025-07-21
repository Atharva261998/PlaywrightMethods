pipeline {
    agent any

    tools {
        nodejs 'NodeJS 18' // Make sure you configured this in Jenkins under Global Tools
    }

    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/Atharva261998/PlaywrightMethods.git', branch: 'master'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'  // More reliable than 'npm install' for CI
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'test-results/**/*.png', allowEmptyArchive: true
            junit 'test-results/**/*.xml'  // If you generate test reports in JUnit format
        }
    }
}

