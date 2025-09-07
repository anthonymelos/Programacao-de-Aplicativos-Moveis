/* FIXME: Metodos

Métodos são funções associadas a objetos. 
Eles são usados para realizar operações usando as propriedades do objeto.
*/
// $ sinal de interpolação
// this: Referencia o objeto atual dentro do método.
let pessoa = {
    nome: "Gomes",
    idade: 25,
    profissao: "Desenvolvedor",
    saudacao: function () {
        return `Olá, meu nome é ${this.nome}.`;
    }
};

console.log(pessoa.saudacao()); // Imprime: Olá, meu nome é Ana.



/* FIXME: Construtores
Construtores são funções usadas para criar objetos com uma 
estrutura similar. Eles permitem criar múltiplos objetos com 
a mesma estrutura, mas valores diferentes.
*/

function Pessoa(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
}

// instanciando um objeto
let pessoa1 = new Pessoa("Gomes", 25, "Desenvolvedor");
let pessoa2 = new Pessoa("Carlos", 30, "Designer");

console.log(pessoa1.nome); // Imprime: Ana
console.log(pessoa2.profissao); // Imprime: Designer