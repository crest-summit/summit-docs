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
    sh "docker-compose up --force-recreate -d"
}
