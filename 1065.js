let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n').map(item=>parseInt(item));

let evenCount = 0

for(let i = 0; i < lines.length; i++) {
    if(lines[i]%2===0) {
        evenCount++
    }
}

console.log(`${evenCount} valores pares`)