/* FIXME: Literal de Objeto

Usamos a sintaxe de literal para criar objetos diretamente com 
chaves e valores.

 */

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    mostrarInformacoes: function () {
        return `${this.marca} ${this.modelo} (${this.ano})`;
    }
};

console.log(carro.mostrarInformacoes()); // Imprime: Toyota Corolla (2020)


/* FIXME: Funções Construtoras

Funções construtoras são usadas para criar novos objetos com um padrão.
*/

function Carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.mostrarInformacoes = function () {
        return `${this.marca} ${this.modelo} (${this.ano})`;
    };
}

let carro1 = new Carro("Honda", "Civic", 2021);
console.log(carro1.mostrarInformacoes()); // Imprime: Honda Civic (2021)


/* FIXME: Prototipagem

JavaScript usa herança prototípica. Cada objeto tem um protótipo 
que pode ser usado para herdar propriedades e métodos.
*/

function Animal(nome) {
    this.nome = nome;
}

Animal.prototype.fazerSom = function () {
    return "Som genérico de animal";
};

// Declarando objeto
let cachorro = new Animal("Rex");
console.log(cachorro.fazerSom()); // Imprime: Som genérico de animal

// Sobrescrevendo o método no objeto específico
cachorro.fazerSom = function () {
    return "Au Au";
};

console.log(cachorro.fazerSom()); // Imprime: Au Au