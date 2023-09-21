let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let varTemporaria;

varS = varA;
varA = varB;
varB = varC;
varC = varS;

console.log(varA, varB, varC);