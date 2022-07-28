let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split(" ").map(item=>parseInt(item));

let soma=0;

for(let i=1; i<lines.length; i++) {
    if(lines[i]<=0) {
        continue;
    } else {
        for(let j = lines[i]-1; j>=0; j--) {
            let padrao = lines[0]+j
            soma+=padrao
        }
    }
}
console.log(soma)