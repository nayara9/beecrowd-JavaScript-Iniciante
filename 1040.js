let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n')

let [n1, n2, n3, n4] = lines[0].split(" ");
let media = (
  (parseFloat(n1) * 2 +
    parseFloat(n2) * 3 +
    parseFloat(n3) * 4 +
    parseFloat(n4)) /
  10
).toFixed(1);
let novaNota = parseFloat(lines[1]);

console.log(`Media: ${media}`);

if (media >= 7) {
  console.log("Aluno aprovado.");
} else if (media < 5) {
  console.log("Aluno reprovado.");
} else if (media >= 5 || media <= 6.9) {
  console.log("Aluno em exame.");
  console.log(`Nota do exame: ${novaNota.toFixed(1)}`);

  let mediaFinal = ((parseFloat(novaNota) + parseFloat(media)) / 2).toFixed(1);

  if (mediaFinal >= 5) {
    console.log("Aluno aprovado.");
  } else {
    console.log("Aluno reprovado.");
  }
  console.log(`Media final: ${mediaFinal}`);
}