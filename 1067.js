let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = parseInt(input.split(' '));

for (let i = 1; i<=lines; i++) {
    if(i%2 !== 0) {
        console.log(i);
    }
}
