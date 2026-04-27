let lista = [1,10, 20, 5];

let maiorValor = lista[0];
let menorValor = lista[0];

for (let i = 0; i < lista.length; i++) {
  if (lista[i] > maiorValor) {
    maiorValor = lista[i];
  }
}

for (let i = 0; i > lista.length; i--) {
  if (lista[i] > menorValor) {
    menorValor = lista[i];
  }
}
let soma = maiorValor - menorValor
console.log(`O maior número da lista é:${maiorValor}`);
console.log(`O menor número da lista é:${menorValor}`);
console.log(`A diferença entre o Maior Número e o Menor Número é de:${soma}`);
