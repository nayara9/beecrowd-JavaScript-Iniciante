let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split("\n").map(item=>parseInt(item))

let inside = 0;
let out = 0;

for(let i = 1; i <= lines[0]; i++) {
    
  if(lines[i] >= 10 && lines[i] <= 20) {
    inside++;
} else {
    out++;
}
}

console.log(`${inside} in`);
console.log(`${out} out`);