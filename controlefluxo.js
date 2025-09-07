/* FIXME: Break

break: Interrompe o loop imediatamente e sai do loop.

*/

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Sai do loop quando i é 5
    }
    console.log(i);
}



/* FIXME: Continue

continue: Pula a iteração atual do loop e continua com a próxima iteração.

*/

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Pula a iteração se i for par
    }
    console.log(i); // Imprime apenas números ímpares
}


/*FIXME: Return 

A palavra-chave return é usada dentro de uma função para retornar 
um valor e sair da função.
*/

function soma(a, b) {
    return a + b; // Retorna a soma de a e b
}

let resultado = soma(5, 3);
console.log(resultado); // Imprime: 8