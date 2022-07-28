let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n').map(item=>parseInt(item))

for (let i of lines) {
    if(i !== 2002) {
        console.log("Senha Invalida");
    } else {
        console.log("Acesso Permitido");
        break;
    }
}