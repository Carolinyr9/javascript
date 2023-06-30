

/*
JSON

Notação de Objeto em Javascript

Conversão de objeto em texto e texto em objeto 

Arquivo simples de troca de dados
*/
const carro = {
    marca: 'Fiat',
    modelo: 'uno',
    ano: '2000',

}

let texto = JSON.stringify(carro)

console.log(texto)

let obj = JSON.parse(texto)

console.log(obj)