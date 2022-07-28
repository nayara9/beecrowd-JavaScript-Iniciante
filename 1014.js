var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift());
var y = parseFloat(lines.shift());

var consumo = x / y

console.log(consumo.toFixed(3) + " km/l");