var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var distancia = lines;
var tempo = distancia*2;

console.log(tempo.toFixed(0) + " minutos")