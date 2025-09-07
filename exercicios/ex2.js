/*Crie uma função chamada calculadora que receba dois números e uma operação (+, -, *, /) como parâmetros. A função deve retornar o resultado da operação ou "Operação inválida" se a operação não for reconhecida.
*/

/*function calculadora(num1, num2, operacao){
    let resultado
    do{
        console.log('Escolha uma opção: (+, - , /, *)')
        switch (operacao){
            case '+':
                resultado = num1 + num2
                break
            case '-':
                resultado = num1 - num2
                break
            case '/':
                resultado = num1 / num2
                break
            case '*':
                resultado = num1 * num2
                break
        }
    }while(opcao != '+' || opcao != '-' || opcao != '/' || opcao != '*')
    return resultado    
}

const calcular = calculadora(3, 4, '+')

console.log(calcular);
    


*/

function calculadora(num1, num2, operacao){
    let resultado
        switch (operacao){
            case '+':
                resultado = num1 + num2
                break
            case '-':
                resultado = num1 - num2
                break
            case '/':
                resultado = num1 / num2
                break
            case '*':
                resultado = num1 * num2
                break
            default:
                console.log('Operação inválida! ')
        }    
    return resultado
}

const calcular = calculadora(10, 4, 'a')
console.log(calcular)
