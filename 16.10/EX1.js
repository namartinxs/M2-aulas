//escreva uma função anonima que recebe um nome como argumento e uma função de callback. 
const saudacao = function(name){
    alert("SEJA BEM VINDO(A)" + name);
}

function pegaNome(saud){
    let userName = prompt("Insira seu nome");
    saud(userName)

    
} 


pegaNome(saudacao)