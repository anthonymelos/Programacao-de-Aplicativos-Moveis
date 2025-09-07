/* FIXME: Laço While 

O loop while é utilizado quando você deseja repetir um bloco de código 
enquanto uma condição é verdadeira.

*/

let i = 0;

while (i < 5) {
    console.log(i); // Imprime números de 0 a 4
    i++;
}

// FIXME: Do while
/*

O loop do...while é similar ao while, mas garante que o 
bloco de código seja executado pelo menos uma vez.

 */

let a = 0;

do {
    console.log(a); // Imprime números de 0 a 4
    a++;
} while (a < 5);

/* FIXME: Exemplo de uso do while 

Solicitar ao usuário um número até que ele insira um número 
positivo usando do...while.
 */

let numero;

do {
    numero = prompt("Digite um número positivo:");
    numero = Number(numero);
} while (numero <= 0);

console.log("Número positivo inserido: " + numero);