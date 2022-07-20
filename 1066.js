var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n').map(item => parseInt(item));

let evenCount = 0;
let oddCount = 0;
let postCount = 0;
let negCount = 0;

for(let i=0; i<lines.length; i++)   {
    if(lines[i]%2 === 0 || lines[i] === 0) {
        evenCount++;
    }
    
    if(lines[i]%2 && lines[i] !== 0) {
        oddCount++;
    }

    if(lines[i]>0) {
        postCount++;
    } 

    if(lines[i]<0) {
        negCount++;
    }
}

console.log(`${evenCount} valor(es) par(es)
${oddCount} valor(es) impar(es)
${postCount} valor(es) positivo(s)
${negCount} valor(es) negativo(s)`);