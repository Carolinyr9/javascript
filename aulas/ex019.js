let num = [5, 8, 2, 9, 3]

let pos = num.indexOf(9)

if (pos == -1) {
    console.log('O valor não foi encontrado')
}

else {
    console.log(`O valor ${num[pos]} está na posição ${pos}`)
}