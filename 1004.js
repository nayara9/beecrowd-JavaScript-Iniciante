var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());

var prod = a*b;

console.log("PROD = " + prod);