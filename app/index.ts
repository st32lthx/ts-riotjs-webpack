/// <reference path="webpack.d.ts" />
var riot = require('riot');
import Car from './Car';
var todo = require('./todoapp');

let car = new Car();
riot.mount('todoapp');
