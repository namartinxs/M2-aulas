//função anonima, callback pq é a fun passada como argumento 
const somarMedia = function (valor1, valor2, valor3, valor4) {
    alert((valor1 + valor2 + valor3 + valor4) / 4)
}

function media(funcaoParaSomar) {
    let nota1 = Number(prompt("Digite a sua nota 1:"))
    let nota2 = Number(prompt("Digite a sua nota 2:"))
    let nota3 = Number(prompt("Digite a sua nota 3:"))
    let nota4 = Number(prompt("Digite a sua nota 4:"))
    //o callback recebe seus argumentos 
    funcaoParaSomar(nota1, nota2, nota3, nota4)
}

//aqui o callback e a função se encontram 
// o callback só é executado quando a função ja foi execcutada 
//media(somarMedia) 

