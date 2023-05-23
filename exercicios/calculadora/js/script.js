function gerar(){
    var num = document.getElementById('num')
    var tab = document.getElementById('seltab')
    var con = 0
    let n = Number(num.value)

    tab.innerHTML = ''
    while (con <= 10) {
        let item = document.createElement('option')
        item.text += `${n} * ${con} = ${n * con}`
        item.value = `tab${con}`
        tab.appendChild(item)
        con++
    }



}