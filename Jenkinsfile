pipeline {
    agent any        
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
                bat 'npm start'
            }
        }
        
        stage('Test') {
      steps {
         sh 'npm test'
      }
    }
  }
}
