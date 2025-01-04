const agruparNomes = function(nome1,nome2,nome3,nome4){
    let nomes = [] 
    nomes.push(nome1,nome2,nome3,nome4)
    alert("NOMES: " + nomes)
    alert("NOMES EM ORDEM A-Z: " + nomes.sort())

}

function pegaNomes (integrantes){
    let name1 = prompt("Digite o 1º nome:")
    let name2 = prompt("Digite o 2º nome:")
    let name3 = prompt("Digite o 3º nome:")
    let name4 = prompt("Digite o 4º nome:")
    integrantes(name1,name2,name3,name4)
}
 
pegaNomes(agruparNomes)