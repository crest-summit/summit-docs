# Summit Documentation

## Contributing

The documentation makes use of a project called MkDocs (http://www.mkdocs.org/).  This tool allows documentation to be written in Markdown and compiles the Markdown into a site structure using a site template.



### Setup - Mac

In order to install everything, you'll need to drop into the command line! :O

```
$ python --version
Python 2.7.2
$ pip --version
pip 1.5.2
```

According to MkDocs, you must have Python version 2.6, 2.7, 3.3, 3.4 or 3.5.

To install mkdocs, run

```
pip install mkdocs
```

After that, you should be able to run the following and see an answer (the version number might be different)...

```
mkdocs --version
mkdocs, version 0.15.2
```


### Atom Setup


### Building the Docs

At the top level of a working copy:
```
mkdocs build --clean
ant 
```

The result will be a `summit-docs.war` file that can be deployed in Wildfly.

### Deploying the Docs

At the top level of a working copy:
```
scp target/summit-docs.war summit@summit-dev.research.vt.edu:tmp/
ssh summit@summit-dev.research.vt.edu
summit-denali.sh dev cli
deploy ~/tmp/summit-docs.war --name=summit-docs.war --force
```
