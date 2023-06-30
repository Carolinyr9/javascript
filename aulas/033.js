exibirTipo(6)

function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++)
    if (limite % 2 == 0){
        console.log(i, 'Par')
    } 
    else {
        console.log(i,'Ímpar')
    }
}