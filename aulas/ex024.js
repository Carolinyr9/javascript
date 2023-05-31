class Amigas {
    constructor(valor1, valor2, valor3){
        this.MelhorAmiga = valor1
        this.Amiga = valor2
        this.Colega = valor3
    }

    disse(){
        return this.MelhorAmiga + " - essa é a melhor amiga dela"
    }
}

const ana = new Amigas ("Lúcia", "Cláudia", "Maria")


const lucia = new Amigas ("Cláudia", "Ana", "Maria")

const claudia = new Amigas ("Maria", "Ana", "Cláudia")

const maria = new Amigas ("Ana", "Lúcia", "Cláudia")

console.log(maria.disse())