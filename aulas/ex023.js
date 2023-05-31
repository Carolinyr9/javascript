
class Carro {
    constructor(valor1, valor2, valor3){
        this.marca = valor1
        this.modelo = valor2
        this.ano = valor3
    }

    buzina() {
        return this.modelo + " buzinou: BII"
    }
}

const uno = new Carro ("Fiat", "Uno", 2001)
console.log(uno.buzina())

const gol = new Carro ("Volkswagen", "Gol", 2013)
console.log(gol.buzina())