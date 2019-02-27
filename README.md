# Deprecated on 02/13/2019. Do not use.

# Summit Documentation

## Contributing

The documentation makes use of a project called MkDocs (http://www.mkdocs.org/).  This tool allows documentation to be written in Markdown and compiles the Markdown into a site structure using a site template.


### Setup - Docker

The project comes with two docker-compose scripts - one for development and the other for the Summit QA environment.

```
docker-compose up -d
```

Once the image is pulled and running, you can open http://localhost:8000 to view the docs.  As changes are made to the files, the site is rebuilt and viewable in the browser. 


### Atom Setup

Coming soon?



## Automatic Deployment

When updates are pushed to this repository the documentation set is automatically updated and deployed to the appropriate feature deployment. 

You can access the production documentation at http://docs.summit.cloud.vt.edu/

### Building the Docs Manually

To build the docs manually, run the following command:

```
docker run -v $(pwd):/documents moird/mkdocs mkdocs build --clean
``` 

The built documents will then be found in the ```/site``` folder.
