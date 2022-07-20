let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n').map(item => parseFloat(item));

let positCount = 0;

for (let i=0; i<lines.length; i++) {
   if(lines[i] > 0) {
        positCount++
  }
}
console.log(`${positCount} valores positivos`);
