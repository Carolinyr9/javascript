/* Criar os objetos para os elementos que serão manipulados: */
const obj_num_largura = document.querySelector('#num_largura')
const obj_num_altura = document.querySelector('#num_altura')
const obj_div_poligono = document.querySelector('#div_poligono')
const obj_p_perimetro = document.querySelector('#p_perimetro')
const obj_zoom_in = document.querySelector('#zoom_in')
const obj_zoom_out = document.querySelector('#zoom_out')
const obj_img_zoom = document.querySelector('#img_zoom')

/* Declarar variáveis */
let tam_zoom

/* Adicionar os eventos para chamar as funções: */
obj_num_largura.addEventListener('change', FunRedimensionaPoligono)
obj_num_altura.addEventListener('change', FunRedimensionaPoligono)
obj_zoom_in.addEventListener('click', FunZoomIn)
obj_zoom_out.addEventListener('click', FunZoomOut)

/* Declarar as funções para executar as ações: */ 
function FunRedimensionaPoligono() {
    if ( obj_num_largura.value < 50 || obj_num_largura.value > 100 ||
         obj_num_altura.value < 50 || obj_num_altura.value > 100 ) {
            alert('Valores inválidos!')
    }
    else {
        obj_div_poligono.style.width = obj_num_largura.value + 'px'
        obj_div_poligono.style.height = obj_num_altura.value + 'px'
        let area = obj_num_largura.value * obj_num_altura.value
        obj_div_poligono.innerHTML = 'Área: ' + area + 'px'

        let perim = parseInt(obj_num_largura.value) + parseInt(obj_num_altura.value)
                + parseInt(obj_num_largura.value) + parseInt(obj_num_altura.value)

        obj_p_perimetro.innerHTML = 'Perímetro: ' + perim + 'px'
    }
}


function FunZoomIn() {
    tam_zoom = obj_img_zoom.width
    tam_zoom = tam_zoom + 30
    if (tam_zoom <= 160) {
        obj_img_zoom.style.width = tam_zoom + 'px'
        obj_zoom_out.style.filter = 'none'
    }
    else {
        obj_zoom_in.style.filter = 'blur(5px)'
    }
}

function FunZoomOut() {
    tam_zoom = obj_img_zoom.width
    tam_zoom = tam_zoom - 30
    if (tam_zoom >= 60) {
        obj_img_zoom.style.width = tam_zoom + 'px'
        obj_zoom_in.style.filter = 'none'
    }
    else {
        obj_zoom_out.style.filter = 'blur(5px)'
    }
}

const obj_num_valor1 = document.querySelector('#num_valor1')
const obj_num_valor2 = document.querySelector('#num_valor2')
const obj_txt_resultado = document.querySelector('#txt_resultado')
const obj_bt_soma = document.querySelector('#bt_soma')
const obj_bt_multiplica = document.querySelector('#bt_multiplica')

obj_bt_soma.addEventListener('click', FunSoma)
obj_bt_multiplica.addEventListener('click', FunMultiplica)

function FunSoma() {
    /* Verifica se os campos numéricos estão vazios */
    if (obj_num_valor1.value == '' || obj_num_valor2.value == '') {
        alert('Preencha os dois valores!')
    }
    else {
        /* Se não estiver vazio, verifica se os valores são válidos */
        if (obj_num_valor1.value < 1 || obj_num_valor1.value > 50 || obj_num_valor2.value < 1 || obj_num_valor2.value > 50) {
            alert('Valores inválidos')
        }
        else {
            /* Converte para Int e soma: */
            let res = parseInt(obj_num_valor1.value) + parseInt(obj_num_valor2.value)

            /* Exibe o resultado no input */
            obj_txt_resultado.setAttribute('value', res)
        }
    }
}

function FunMultiplica() {
    /* Verifica se os campos numéricos estão vazios */
    if (obj_num_valor1.value == '' || obj_num_valor2.value == '') {
        alert('Preencha os dois valores!')
    }
    else {
        /* Se não estiver vazio, verifica se os valores são válidos */
        if (obj_num_valor1.value < 1 || obj_num_valor1.value > 50 || obj_num_valor2.value < 1 || obj_num_valor2.value > 50) {
            alert('Valores inválidos')
        }
        else {
            /* Converte para Int e soma: */
            let res = parseInt(obj_num_valor1.value) * parseInt(obj_num_valor2.value)

            /* Exibe o resultado no input */
            obj_txt_resultado.setAttribute('value', res)
        }
    }
}

const obj_link_aumentar = document.querySelector('#link_aumentar')
const obj_link_diminuir = document.querySelector('#link_diminuir')
const obj_img_redimensionada = document.querySelector('#img_redimensiona')
let var_img_redimensionada

obj_link_aumentar.addEventListener('click', FunAumenta)
obj_link_diminuir.addEventListener('click', FunDiminui)

function FunAumenta() {
    var_img_redimensionada = obj_img_redimensionada.width
    var_img_redimensionada = var_img_redimensionada + 10

    if(var_img_redimensionada > 150){
        alert('Tamanho máximo!')
    }
    else {
        obj_img_redimensionada.style.width = var_img_redimensionada + 'px'
    }
}

function FunDiminui() {
    var_img_redimensionada = obj_img_redimensionada.width
    var_img_redimensionada = var_img_redimensionada - 10

    if(var_img_redimensionada < 50){
        alert('Tamanho mínimo!')
    }
    else {
        obj_img_redimensionada.style.width = var_img_redimensionada + 'px'
    }
}


