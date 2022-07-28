var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var num = parseInt(lines);
var numero = num

var cedula100 = parseInt(numero / 100);
numero = numero % 100;

var cedula50 = parseInt(numero / 50);
numero = numero % 50;

var cedula20 = parseInt(numero / 20);
numero = numero % 20;

var cedula10 = parseInt(numero / 10);
numero = numero % 10;

var cedula5 = parseInt(numero / 5);
numero = numero % 5;

var cedula2 = parseInt(numero / 2);
numero = numero % 2;

var cedula1 = numero;

console.log(
  num +
    "\n" +
    cedula100 +
    " nota(s) de R$ 100,00" +
    "\n" +
    cedula50 +
    " nota(s) de R$ 50,00" +
    "\n" +
    cedula20 +
    " nota(s) de R$ 20,00" +
    "\n" +
    cedula10 +
    " nota(s) de R$ 10,00" +
    "\n" +
    cedula5 +
    " nota(s) de R$ 5,00" +
    "\n" +
    cedula2 +
    " nota(s) de R$ 2,00" +
    "\n" +
    cedula1 +
    " nota(s) de R$ 1,00");