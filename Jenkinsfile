pipeline {
    agent any        
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
                bat 'nohup npm start &'
            }
        }
        
        stage('Test') {
      steps {
         bat 'npm test'
      }
    }
  }
}
