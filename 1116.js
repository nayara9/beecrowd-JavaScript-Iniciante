let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split("\n");

for(let i = 1; i<=lines[0]; i++) {

    let[x,y] = lines[i].split(" ").map(item=>parseInt(item));

    if (y === 0) {
        console.log("divisao impossivel")
    } else {
        let divisao = x/y
        console.log(divisao.toFixed(1))
    }
}