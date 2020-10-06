node {
    stage 'Checkout'
        checkout scm
    stage 'Build & UnitTest'
        sh "docker-compose -f "docker-compose-tests.yml" up -d --build"
        sh "docker-compose -f "docker-compose.yml" up -d --build"
  
}
