let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split("\n");

for(let i = 1; i<=lines[0]; i++) {
    let [x, y, z] = lines[i].split(" ").map(item=>parseFloat(item));
    let media = (x*2+y*3+z*5)/10;

    console.log(media.toFixed(1));  
}

