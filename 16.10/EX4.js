function executarAsync (num,callback){
    setTimeout(()=>{
        const resultado = num * 2;
        callback(resultado);
    },2000); //atraso de dois segundos
}

executarAsync(5,(resultado)=>{
    console.log(`O RESULTADO É: ${resultado}`);
});
