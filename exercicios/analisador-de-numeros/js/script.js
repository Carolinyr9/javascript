let num = document.getElementById('txtnum')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let l = 0;
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }
    else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    }
    else {
        return false
    }

}

function adicionar (){
    if(isNumero(num.value) && !inLista(num.value)) {
        alert('Tudo ok')

    }

    else {
        alert('Valor inválido ou já encontrado na lista.')
    }
}
