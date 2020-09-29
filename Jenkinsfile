pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }

  }
  stages {
    stage('Docker build') {
      steps {
        sh 'docker build -t nodeinfo .'
      }
    }

  }
}