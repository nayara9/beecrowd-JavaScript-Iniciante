let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n')

let [codigo1, quantidade1, valor1] = lines[0].split(" ");
let [codigo2, quantidade2, valor2] = lines[1].split(" ")



let valor = parseInt(quantidade1)*parseFloat(valor1) + parseInt(quantidade2)*parseFloat(valor2);

console.log(`VALOR A PAGAR: R$ ${valor.toFixed(2)}`)