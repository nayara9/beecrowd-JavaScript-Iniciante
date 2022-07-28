let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split("\n").map(item=>parseInt(item));

let text
for(let i=0; i<lines.length; i++) {
    if(lines[i]==0) {
        break
    } else {
        text = ""
        for(let j=1; j<=lines[i]; j++) {
            if(j==lines[i]){
                text=text+j
            } else {
            text=text + j + " ";
            }
        }
    }
    console.log(text)
}
