// JS - Obj Endereço
/* Criar um objeto endereço com a seguinte formação:
Rua
Cidade
CEP
exibirEndreco(endereco) */

let end = {
    Rua: 'Rua Padre Montoya',
    Cidade: 'São Paulo',
    CEP: '08110-600'
}

function exibirEndereco(end){
    for (let chave in end) {
        console.log(chave,end[chave])
    }
}


exibirEndereco(end)