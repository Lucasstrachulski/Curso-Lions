let palavra = "ovo"

let helper = ""

for(let i = 0; i<palavra.length;i++){
    helper+=palavra[palavra.length-i-1]
}

console.log(palavra);
console.log(helper);

if(palavra==helper){
    console.log("PALINDROMO");
}

//Fiz depois para aprender