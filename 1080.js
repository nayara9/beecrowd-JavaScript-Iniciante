let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split("\n").map(item=>parseInt(item));

let maior = 0

for(i = 0; i<lines.length; i++) {
    if(lines[i] > maior) {     
    maior = lines[i];
    } 
}

let index = lines.findIndex(line => line >= maior);
let position = index+1;
console.log(maior);
console.log(position);