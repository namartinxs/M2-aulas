ar = []
let criadora = function(){
    let inpt = document.getElementById('inpt')
    let value = inpt.value.toLowerCase()
    if (value){
        ar.push(value)
        inpt.value = ''
        btnNo.disabled = ar.length <2
    }else{
        alert("Por favor insira um nome!")
    }
}
let organizadora = function(array){
   return array.sort()

} 

function displayResult(org){
    let resultado = document.getElementById('result')
    //resultado.innerText = org.join(', ')
    resultado.innerHTML = ''
    let newItem = document.createElement('ol')
    org.forEach(item => {
        let listItem  = document.createElement('li')
        listItem.textContent = item
        newItem.appendChild(listItem)
    }); 
    resultado.appendChild(newItem)
}


const btnYes =  document.getElementById('yes');
btnYes.addEventListener('click',criadora) 

const btnNo = document.getElementById('no');



btnNo.addEventListener('click', function () {
   
        let arrayOrganizado = organizadora(ar);
        displayResult(arrayOrganizado);
    
});