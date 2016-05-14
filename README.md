# gdg-webapp

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## First Time Setup

* sudo npm install --global npm@latest
* sudo npm install --global yo bower grunt-cli
  * yo --version && bower --version && grunt --version
* sudo npm install --global generator-angular@0.11.1 generator-karma
* yo
* npm install jasmine-core
* npm install phantomjs
* npm install karma
* npm install grunt-karma
* sudo npm cache clean && npm install gruntjs/grunt-contrib-imagemin
* Fix CSS issue
  * Add <link rel="stylesheet" href="../bower_components/bootstrap/dist/css/bootstrap.css"> to index.html
  OR
  * Add this to bower.json:

    ```javascript
    "overrides": {
      "bootstrap": {
        "main": [
          "less/bootstrap.less",
          "dist/css/bootstrap.css",
          "dist/js/bootstrap.js"
        ]
      }
    }
    ```

* bower install angular-material (https://github.com/angular/material - include cdn css link)

## Build & development

Run `grunt` for building and `grunt serve` for preview.

`grunt serve:dist` will preview what gets generated in dist

## Testing

Running `grunt test` will run the unit tests with karma.

## Deploying

Run `docker-machine start` to setup virtual machine

* `eval "$(docker-machine env default)"` will set default as the vm's environment

### Deploying Automatically

Currently `jwill824/gdg_webapp` is set to build and push anytime you make a git commit. So you do not have to do anything after you develop a feature.

### Deploying Manually

Run `docker build -t jwill824/gdg_webapp:latest .` to build the docker container

Then with `docker run --name website -p 9000:80 -d jwill824/gdg_webapp:latest` you will be able to preview what gets run in the docker container, in this case it's the site's generated dist contents

Go here after you run the latest command `http://192.168.99.101:9000`

Once you like what you see, push your container, `docker push jwill824/gdg_webapp:latest`
