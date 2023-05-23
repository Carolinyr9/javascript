let num = [5, 8, 2, 9, 3, 1]

/*
for (var pos = 0; pos < num.length; pos ++){
    console.log(num[pos])
} // faz com que o número seja exibido conforme o número de variáveis existentes
*/

/*
Sem o for:
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])
*/

for (let pos in num) {
    console.log(num[pos])
}