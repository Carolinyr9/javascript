 function contar(){
    /*
    document.getElementById('tempo').innerHTML = 'Começou a contar!'

    setTimeout(function(){
        document.getElementById('tempo').innerHTML = "Executou o setTimeOut"
    }, 5000)

}

function parar(){
    clearTimeout(tempo)
    document.getElementById('tempo').innerHTML = "parou a contagem"
} */

tempo = setInterval(function () {
    var cronometro = document.getElementById('tempo').innerHTML
    var soma = parseInt(cronometro) + 1;
    document.getElementById('tempo').innerHTML = soma;


}, 1000)

 }
