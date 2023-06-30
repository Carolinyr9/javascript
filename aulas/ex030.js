// Função que usa dois numeros e retorna o maior entre eles

let valorMaior = max(5,5)
console.log(valorMaior)

function max(numero1, numero2) {
    if(numero1 > numero2){
        return numero1
    }
    else if(numero1 = numero2){
        return 'São iguais'

    }
    else {
        return numero2
    }
}