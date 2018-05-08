# SumoCoders Framework Style as a package


# Usage with [Encore](https://symfony.com/doc/current/frontend.html)

```
var Encore = require('@symfony/webpack-encore');

Encore
    ...
    .enableSassLoader(function(options) {
      options.includePaths = [
          __dirname + '/node_modules/frameworkstylepackage/dist'
      ];
    })
    ...
;

module.exports = Encore.getWebpackConfig();
```
