let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split("\n")
let [x,y] = lines.shift().split(" ").map(item=>parseInt(item));

while (true) {
    
    if(x>0 && y>0) {
        console.log("primeiro");
    }
    else if (x<0 && y>0) {
        console.log("segundo");
    }
    else if (x<0 && y<0) {
        console.log("terceiro");
    }
    else if (x>0 && y<0) {
        console.log("quarto");
    }
    else if(x===0 || y===0) {
        break;
    }
    [x,y] = lines.shift().split(" ").map(item=>parseInt(item));
}