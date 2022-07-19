let input = require('fs').readFileSync('stdin', 'utf8');
let lines = parseFloat(input);

let pi = 3.14159;
let area = pi * Math.pow(lines,2);

console.log(`A=${area.toFixed(4)}`);