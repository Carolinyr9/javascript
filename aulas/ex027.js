/* Objetos em JS */

let pessoa = {
    nome: 'Luciana',
    idade: 33,
    estadoCivil: 'casada',
    filhos: 3,
    residencia: true
}

// console.log(pessoa)

pessoa.estadoCivil = 'solteira'

// console.log(pessoa.estadoCivil)

/* Objetos dentro de objetos */

let carrosNovos = {
    kwid: {
        marca: 'renault',
        ano: 2021,
        versao: 'ZEN',
        transmissao: 'manual'
    },

    ecosport: {
        marca: 'ford',
        ano: 2015,
        versao: 'TITANIUM PLUS',
        transmissao: 'automático'
    },

    gol: {
        marca: 'volkswagen',
        ano: 2021,
        versao: 'MSI 4P MANUAL',
        transmissao: 'manual'
    }
}

// console.log(carrosNovos)

carrosNovos.gol.ano = 2022

// console.log(carrosNovos.gol.ano)

// Classes

// Substituem o jeito tradicional de colocar objetos dentro de objetos 
// Antes de usar o constructor() precisam sempre estar declaradas as class's

class Carro {
    constructor(valor1,valor2,valor3) {
        this.marca = valor1
        this.modelo = valor2
        this.ano = valor3
    }
}

const uno = new Carro('Fiat', 'Uno', 2002)
console.log(uno)

const gol = new Carro("Volkswagen", 'Gol', 2013)
console.log(gol)
gol.ano = 2014
console.log(gol)



