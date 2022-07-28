let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split("\n").map(item=>parseInt(item));

let contador=0;
let soma=0;

for(let i=1; i<lines.length; i++) {
    if(lines[i]<=lines[0]) {
        continue;
    } else {
        let j=lines[0]
        while(soma<=lines[i]) {
            soma+=j
            contador++
            j++
        }
    }
}
console.log(contador);