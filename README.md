This fork is NOT available on npm, below downloads are of the project this was forked from, the downloads are NOT for this fork!!!
This is a fork that instead of making a box with a random fact will return a string with the fact

Random Fact
===========

Make your build tasks a little more interesting, with a random fact!

![Example](https://github.com/Rhym/node-random-fact/blob/master/screenshot.png?raw=true)

Installation
------------

```bash
npm i --save random-fact
```

Usage
-----

```javascript
var fact = require('random-fact');
fact();
```

#### Gulp

```javascript
gulp.task('random-fact', cb => {
  require('random-fact')();
  cb();
});
```

#### Webpack

Use the webpack plugin wrapper: https://github.com/Rhym/webpack-random-fact
