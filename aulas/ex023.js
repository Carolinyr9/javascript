// Pode ser uma function ao em vez de uma class, mas eu n gostei mt pq n da p mostrar tudo ao msm tem´p


function Celular(marca, tamanho, bateria){
    this.marca = marca,
    this.tamanho = tamanho,
    this.bateria = bateria
}

const asus = new Celular('Asus', 5.5, 5000)

const samsung = new Celular('samsung', 6.6, 5000)

const motorola = new Celular('motorola', 6.5, 4020)

const xiaomi = new Celular('xiaomi', 6.43, 5000)

console.log(asus)


/*
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
*/