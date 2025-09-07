/* Definindo Classes
Com a introdução do ECMAScript 6 (ES6), JavaScript suporta uma sintaxe de classes 
que torna a definição de objetos e herança mais intuitiva.

constructor: Um método especial usado para inicializar novos objetos.
Métodos: São definidos diretamente na classe.
*/


class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    return `Olá, meu nome é ${this.nome}.`;
  }
}

let pessoa1 = new Pessoa("Gomes", 25);
console.log(pessoa1.saudacao()); // Imprime: Olá, meu nome é Ana.


/* FIXME: Herança

Classes podem herdar de outras classes usando a palavra-chave extends.
*/

class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  fazerSom() {
    return "Som genérico de animal";
  }
}

class Cachorro extends Animal {
  constructor(nome, raca) {
    super(nome); // Chama o construtor da classe pai
    this.raca = raca;
  }

  fazerSom() {
    return "Au Au";
  }
}

let cachorro = new Cachorro("Rex", "Labrador");
console.log(cachorro.fazerSom()); // Imprime: Au Au
console.log(cachorro.nome); // Imprime: Rex
console.log(cachorro.raca); // Imprime: Labrador