//Crie uma arrow function chamada filtrarPares que receba um array de números e retorne apenas os números pares.

const filtrarPares = () =>{
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8]
    let dobrados = numeros.map(num => num * 2)
    console.log(dobrados)
}

filtrarPares()