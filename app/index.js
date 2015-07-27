'use strict';
/*
  To compile manually:
    1. webpack config:
    plugins: [
       new webpack.ProvidePlugin({
         riot: 'riot/riot+compiler.js'
       })
     ]
    2. in your index.js set `window.riot = riot`
    3. riot.compile(require('./app/app.tpl'));
    4. riot.compile(require('./app/app.tag'));
*/

require('feature-x');
