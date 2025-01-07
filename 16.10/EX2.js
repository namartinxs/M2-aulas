const callback = function(n1,n2,op){
    let resultado;
    if (op == "+"){
        resultado = n1 + n2
        alert("O RESULTADO DA OPERAÇÃO É"+ resultado)
    }else if( op == "-"){
        resultado = n1 - n2
        alert("O RESULTADO DA OPERAÇÃO É"+ resultado)
    }else if( op == "*"){
        resultado = n1 * n2
        alert("O RESULTADO DA OPERAÇÃO É"+ resultado)
    }else if( op == "/"){

        if (n1 == 0 || n2 == 0){
            alert("IMPOSSÍVEL DIVIDIR POR ZER0")
        }else{
            resultado = n1 / n2
            alert("O RESULTADO DA OPERAÇÃO É" + resultado)
        }
        
    }else{
        alert("OPERADOR NÃO ENCONTRADO")
    } 
    return resultado; 

    
}

function operar(n1,n2,op){
    return callback(n1,n2,op)
}

operar(10,0,"/")

