let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input;

let num = 0

while(lines>=1 ) {
    while (num<=lines) {
        num+=2;
        if(num<=lines) {
            let pow = Math.pow(num,2);
            console.log(`${num}^2 = ${pow}`);
        }
    }
    lines-=2;  
}   
