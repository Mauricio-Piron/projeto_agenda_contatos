const form = document.getElementById('form-agenda');
const contatos = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionalinha();
    inseredados();

});

function adicionalinha() {

    const inputContato = document.getElementById('nome-contato');
    const inputTel = document.getElementById('tel-contato');

    if (contatos.includes(inputContato.value)) {
        alert(`Contato já existe`);
    } else {

    contatos.push(inputContato.value);
    telefone.push(inputTel.value);

    let linha = '<tr>';
    linha += `<td>${inputContato.value}</td>`;
    linha += `<td>${inputTel.value}</td>`;
    linha += '</tr>'

    linhas += linha;
    }
    
    inputContato.value = '';
    inputTel.value = '';
}

function inseredados(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}