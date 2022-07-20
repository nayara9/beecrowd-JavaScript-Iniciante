var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ').map(item => parseInt(item));

let tempo 

if (lines[0]===lines[1]) {
  tempo = 24;
}

else if (lines[0]>lines[1]) {
    tempo = 24 - lines[0] + lines[1]
}

else if (lines[0]<lines[1]) {
    tempo = lines[1] - lines[0] 
}

console.log (`O JOGO DUROU ${tempo} HORA(S)`);