# gdg-webapp

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Initial Setup

* sudo npm install --global npm@latest
* sudo npm install --global yo bower grunt-cli
*   yo --version && bower --version && grunt --version
* sudo npm install --global generator-angular@0.11.1 generator-karma
* yo
* npm install jasmine-core
* npm install phantomjs
* npm install karma
* npm install grunt-karma
* sudo npm cache clean && npm install gruntjs/grunt-contrib-imagemin
### Fix CSS issue
* Add <link rel="stylesheet" href="../bower_components/bootstrap/dist/css/bootstrap.css"> to index.html
OR
* Add this to bower.json:
"overrides": {
  "bootstrap": {
    "main": [
      "less/bootstrap.less",
      "dist/css/bootstrap.css",
      "dist/js/bootstrap.js"
    ]
  }
}
* bower install angular-material (https://github.com/angular/material - include cdn css link)

## Dependencies

* npm
    * grunt
        * grunt-karma
            * karma
            * phantomjs
            * jasmine-core
    * bower

## Deploying

`docker build -t <image>:latest .`

`docker push <image>:latest`
