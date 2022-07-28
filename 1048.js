let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines =parseFloat(input)

let percent
if(lines>=0 && lines<=400.00) {
     percent = 15;
}
else if(lines>=400.01 && lines<=800) {
     percent = 12;
}
else if(lines>=800.01 && lines<=1200) {
     percent = 10;
}
else if(lines>=1200.01 && lines<=2000) {
     percent = 7;
}
else if(lines>2000) {
     percent = 4;
}
let reajuste = lines*(percent/100);
let salario = lines+reajuste;

console.log(`Novo salario: ${salario.toFixed(2)}
Reajuste ganho: ${reajuste.toFixed(2)}
Em percentual: ${percent} %`)