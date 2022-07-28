let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n').map(item=>parseInt(item));

let a = lines.shift("\n")
let b = lines.shift()

let soma = a+b;

console.log(`SOMA = ${soma}`)