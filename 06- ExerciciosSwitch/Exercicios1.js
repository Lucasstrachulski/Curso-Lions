const promp = require('prompt-sync')();

console.log("Gêneros em cartaz:Ação, Comédia, Terror, Animação.")

const genero = prompt("Escolha o gênero que quer assistir! R: ")

switch (genero) {
    case "Ação":
        console.log("O filme ação passará na Sala 01!")
        break;
case "Comédia":
    console.log("O filme Comédia passará na Sala 02!")
    break;
    case "Terror":
        console.log("O filme Terror passará na Sala 03!")
        break;
        case "Animação":
            console.log("O filme passará na Sala 04!")
            break;
    default:
        console.log("Não existe nenhum filme com esse nome!")
        break;
}