/*Exercício 7: Animais com Herança
Crie uma classe Animal com:

Constructor: nome, tipo
Método apresentar() que retorna "Eu sou [nome], um [tipo]"
Método emitirSom() que retorna "Fazendo som..."

Depois crie classes filhas:

Cachorro que sobrescreve emitirSom() para retornar "Au au!"
Gato que sobrescreve emitirSom() para retornar "Miau!"

javascript// Teste:
const dog = new Cachorro("Rex", "cachorro");
const cat = new Gato("Mimi", "gato");
console.log(dog.apresentar()); // "Eu sou Rex, um cachorro"
console.log(dog.emitirSom()); // "Au au!"
console.log(cat.emitirSom()); // "Miau!"
*/