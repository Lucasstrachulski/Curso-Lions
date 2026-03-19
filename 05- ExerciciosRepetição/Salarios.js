const prompt = require('prompt-sync')();
let Lista = [2500,3200,4100,5000,6200]
Lista.forEach((Lista)=>{
    let reajuste = Lista * 0.10
    let total = reajuste + Lista
    console.log("Os sálarios com o reajuste ficou R$:"+total)
})