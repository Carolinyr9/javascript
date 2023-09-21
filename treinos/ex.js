const num1 = prompt('Digite um numero');
const num2 = prompt('Digite mais um numero');

// poderiamos ter usado a seguinte sintaxe: 
// num1 = Number(num1);
// const resultado = Number(num1) +  Number(num2);
// Esses dois metodos funcionam

const resultado = parseInt(num1) + parseInt(num2);

// Aqui usamos aspas simples, mas podemos usar a crase e dai teremos acesso às template strings
//alert(`O resultado da soma é: ${resultado}`);
//Dentro das template strings podemos também fazer uso de expressões usando esse método
//alert(`O resultado é {num1 + num2}`)
// Assim eliminamos a variavel resultado
alert('O resultado da soma é ' + resultado);