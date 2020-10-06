
pipeline {
    agent any
    stages {
      stage("Build") {
        steps {
          sh '/usr/local/bin/docker-compose -f "docker-compose.yml" up -d --build'
          sh '/usr/local/bin/docker-compose -f "docker-compose-tests.yml" up -d --build'
        }
      }
    }
}
