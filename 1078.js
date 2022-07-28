let input = require('fs').readFileSync('stdin', 'utf8');
let lines = parseInt(input)

for(let i = 1; i<=10; i++) {
    let mult = lines * i;
    console.log(`${i} x ${lines} = ${mult}`);
}
