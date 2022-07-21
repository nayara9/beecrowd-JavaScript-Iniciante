let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split("\n").map(item=>parseInt(item));

if (lines[0] < lines [1]) {
    for(let i = lines[0] + 1; i < lines[1]; i++) {
        if(i%5 === 2 || i%5 ===3)   {
            console.log(i)
        }
    }
}   else {
    for(let j = lines[1] + 1 ; j < lines[0]; j++)
        if(j%5 === 2|| j%5 === 3)   {
            console.log(j)
        }
}
