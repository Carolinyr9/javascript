// Igualdade de Objetos

function Endereço(rua, cidade, cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const end1 = new Endereço('a', 'b', 'c')
const end2 = new Endereço('a', 'b', 'c')

function saoIguais(end1, end2){
    // comparar se as propriedades são iguais
    return end1.rua === end2.rua && end1.cidade === end2.cidade && end1.cep === end2.cep


}

console.log(saoIguais(end1, end2))

function temEndMemoriaIgual(end1, end2){
    // se tem referencia de memoria iguais

    return end1 === end2
}

console.log(temEndMemoriaIgual(end1, end2))