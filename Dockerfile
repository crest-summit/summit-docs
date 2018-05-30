FROM moird/mkdocs as build
WORKDIR /app
COPY mkdocs.yml .
COPY custom_theme ./custom_theme
COPY docs ./docs
RUN mkdocs build --clean && rm -rf site/images-notconverted

FROM node:alpine
EXPOSE 80
WORKDIR /app
COPY package* .
RUN npm install
COPY *.js ./
COPY --from=build /app/site /app/site
CMD node serve.js