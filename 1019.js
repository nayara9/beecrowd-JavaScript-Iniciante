var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var tempo = parseInt(lines);

var horas = parseInt(tempo/3600);
tempo = tempo%3600;

var minutos = parseInt(tempo/60);
var tempo = tempo%60;

console.log(horas + ":" + minutos + ":" + tempo);
