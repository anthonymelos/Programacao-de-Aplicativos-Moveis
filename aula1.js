//=== compara o tipo
// == compara só o valor

console.log('ola mundo')

let nome = 'anthony'
let idade = 25
let e = true

console.log(typeof nome, idade, e)

for (let i = 0; i< 5; i++){

}

let frutas = ['maça', 'banana', 'pera'] //lista == array ---- of para array
for(let fruta of frutas){
    console.log(fruta)
}



let pessoa = {nome:'melo', idade: 22} //objeto ou dicionario ----- in para objeto
for (let chave in pessoa){
    console.log(chave + ':' + pessoa[chave])
}

async function buscarDados() {
    return "Dados recebidos"
}

buscarDados().then(console.log)