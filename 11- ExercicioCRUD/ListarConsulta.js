function ListarMedicos(medicos){
if(medicos.length === 0){
    console.log("Nenhum médico cadastrado com esse ID!");
    return
}

medicos.foreach( medicos =>{
    console.log(`\n Id:${medicos.id}`);
    console.log(`Nome:${medicos.nome}`);
    console.log(`Especialidade:${medicos.especialidade}`);
})
}