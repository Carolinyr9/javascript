function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique seus dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked) {
            genero = 'Homem'
            
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe-homem.jpeg')

            }else if (idade >= 10 && idade < 21){
                img.setAttribute('src', 'jovem-homem.jpg')

            } else if (idade >= 21 && idade < 50){
                img.setAttribute('src', 'adulto-homem.jpeg')

            } else {
                img.setAttribute('src', 'idoso-homem.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe-mulher.jpg')
    
                }else if (idade >=10 && idade < 21){
                    img.setAttribute('src', 'jovem-mulher.jpeg')

                } else if (idade >= 21 && idade < 50){
                    img.setAttribute('src', 'adulta-mulher.jpg')

                } else {
                    img.setAttribute('src', 'idosa-mulher.jpg')
                }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        
    }
}