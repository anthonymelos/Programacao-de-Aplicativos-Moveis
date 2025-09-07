//Crie uma função chamada saudar que receba um nome como parâmetro e retorne "Olá, [nome]!".

function saudar(nome){
    return `Olá, ${nome}!`
}

let resultado = saudar("Anthony ")
console.log(resultado)


//Versão arrow function

const saudar2 = nome => `Olá, ${nome}`

let resultado2 = saudar2("de Melo ")
console.log(resultado2)

