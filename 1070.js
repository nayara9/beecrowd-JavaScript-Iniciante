let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = parseInt(input)

let contador = 0

while(contador < 6) {
    if(lines%2 !== 0) {
    console.log(lines);
    lines+=2
    contador ++ 
    } else {
        lines++    
    }
}