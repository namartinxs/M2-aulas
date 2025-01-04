// captura os elementos
const names = document.getElementById('name');
const frsemestre = document.getElementById('frs');
const scnsemestre = document.getElementById('scn');
const trdsemestre = document.getElementById('trd');

function media(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    const tableBody = document.getElementById('tablebody');
    const newRow = document.createElement('tr');
    
    // captura o valor dos elementos
    let nome = names.value; // Acessando o valor do campo nome
    let nota1 = frsemestre.value;
    let nota2 = scnsemestre.value;
    let nota3 = trdsemestre.value;

    // Calcula a média
    let media = ((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3).toFixed(2);

    // Cria e adiciona células
    newRow.innerHTML = `
        <td>${nome}</td>
        <td>${nota1}, ${nota2}, ${nota3}</td>
        <td>${media}</td>
    `;
        
    tableBody.appendChild(newRow);
}

// Associa o evento de envio do formulário
const form = document.getElementById('dataForm');
form.addEventListener('submit', media);
