pipeline {
    agent any
    tools(nodejs "Node v16.17.1")
        
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}
