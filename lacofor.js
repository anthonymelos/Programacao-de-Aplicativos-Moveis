/* FIXME: Laço For

O loop for é utilizado quando você sabe quantas vezes deseja repetir um 
bloco de código.

*/

for (let i = 0; i < 5; i++) {
    console.log(i); // Imprime números de 0 a 4
}

// FIXME: For in
/*
O loop for...in é usado para iterar sobre as propriedades de um objeto, 
enquanto for...of é usado para iterar sobre elementos de um array ou 
objeto iterável.
*/

let pessoa = { nome: "João", idade: 30 };

for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
}

// FIXME: For of

let frutas = ["maçã", "banana", "laranja"];

for (let fruta of frutas) {
    console.log(fruta);
}