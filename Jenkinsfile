node {

    sh "pwd > location"
    def location = readFile("location").trim()
    sh "rm location"

    stage 'Checkout'
    checkout scm

    stage 'mkdocs build'
    sh "docker run -v $location:/documents moird/mkdocs mkdocs build --clean"

    stage 'Create Docker image'
    docker.build "summit/docs"

    stage 'Run image in QA'
    sh "docker-compose -f docker-compose-qa.yml up --force-recreate -d"

    stage 'Push image to ECR'
    docker.withRegistry('https://606752838354.dkr.ecr.us-east-1.amazonaws.com', 'ecr:aws-jenkins-credentials') {
        docker.image('summit/docs').push('latest');
    }
}
