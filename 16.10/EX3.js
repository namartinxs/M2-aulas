//Implemente uma funçção chamasa filtrar ele que receba um array de numeros e uma fun call. A funcalo deve retornar um novo array contendo apenas os elementos que a callback achar válidos//


function filtrarElementos (ary, callback){
    const resultado = []

    for (let i =0; i< ary.length; i++){
        if (callback(ary[i])){
            resultado.push(ary[i]);
        }
    }
    return resultado;
}

const numeros =[1,2,3,4,6,8,9,10];

//callback para filtrar 
const pares = filtrar(numeros,(numero)=> numero % 2 ==0 );

console.log(pares);
