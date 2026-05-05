let texto = "Banana";
let vogais = "aeiou";
let Contadorvogais = 0;
let TextoMinusculo = texto.toLowerCase();

for (let i = 0; i < TextoMinusculo.length; i++) {
  let letra = TextoMinusculo[i];
  if (letra >= "a" && letra <= "z") {
    if (vogais.includes(letra)) {
      Contadorvogais++;
    }
  }
}
console.log(`Total de vogais é:${Contadorvogais}`);
