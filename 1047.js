let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split(' ').map(item => parseInt(item));

let hora 
let minuto

if (lines[3]>=lines[1]) {

    minuto = lines[3]-lines[1];
    
    if (lines[0]===lines[2] && lines[3]===lines[1]) {
        hora = 24;
    }

    else if(lines[0]===lines[2] && lines[3]>=lines[1]) {
        hora = 0;
    }

    else if (lines[0]>lines[2]) {
        hora = 24 - lines[0] + lines[2]
    }

    else if (lines[0]<lines[2]) {
        hora = lines[2] - lines[0] 
    }
}

else {

    minuto = lines[3] + 60 - lines[1];
    let horas2 = lines[2] - 1;

    if (lines[0]===horas2 ) {
    hora = 0                   ;
    }
    
    else if (lines[0]>horas2) {
        hora = 24 - lines[0] + horas2
       
    }
    
    else if (lines[0]<horas2) {
        hora = horas2 - lines[0]
    }
}   
console.log(`O JOGO DUROU ${hora} HORA(S) E ${minuto} MINUTO(S)`);