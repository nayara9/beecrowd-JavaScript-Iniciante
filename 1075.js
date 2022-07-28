let input = require('fs').readFileSync('stdin', 'utf8');
let lines = parseInt(input)

for(let i =1; i < 10000; i++) {
    if(i%lines == 2) {
        console.log(i);
    }
}