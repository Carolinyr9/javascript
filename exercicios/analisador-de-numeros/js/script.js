var num = document.getElementById('txtnum')
var lista = document.getElementById('lista')
var res = document.getElementById('res')
var l = 0;
var valores = []

/* function isNumero(n){
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

}*/

function adicionar (){
    if(num.value > 0) {
        alert('Tudo ok')

    }

    else {
        alert('Valor inválido ou já encontrado na lista.')
    }
}
