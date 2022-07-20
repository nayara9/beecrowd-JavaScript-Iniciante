let input = require('fs').readFileSync('stdin', 'utf8');
let lines = parseInt(input);

for(let i=1; i<=lines; i++) {
    if(lines%i==0) {
    console.log(i)
    }
}
