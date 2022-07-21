let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n').map(item=>parseInt(item));

let total = 0
if(lines[0]<lines[1]) {
    
    for(let i = lines[0]; i<=lines[1]; i++) {   
        if (i%13!==0) {
            total = total + i
        }
    }
    console.log(total)
}

else {
    for(let j = lines[0]; j>=lines[1]; j--) {
        if (j%13!==0) {
            total = total + j
        }
    }
    console.log(total)
}