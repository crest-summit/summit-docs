node {

    sh "pwd > location"
    def location = readFile("location").trim()
    sh "rm location"

    stage 'Checkout'
    checkout scm

    stage 'mkdocs build'
    sh "docker run -v $location:/documents moird/mkdocs mkdocs build"

    stage 'Create Docker image'
    docker.build "summit/docs"
}
