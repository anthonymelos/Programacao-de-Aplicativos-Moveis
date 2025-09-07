/*Conta Bancária Simples
Crie um objeto contaBancaria com propriedades: titular, saldo e número da conta. Adicione métodos:

depositar(valor) - aumenta o saldo
sacar(valor) - diminui o saldo (só se tiver saldo suficiente)
mostrarSaldo() - exibe o saldo atual
*/

const contaBancaria = {
    titular: 'Anthony',
    saldo: 85200,
    nConta: 12345,

    depositar(valor){
        this.saldo = this.saldo + valor
        return this.saldo
    },

    sacar(valor){
        if (this.saldo < valor){
            console.log('Saldo insuficiente!')
        } else{
            this.saldo = this.saldo - valor
            return this.saldo 
        }
    },

    mostrarSaldo(){
        console.log(this.saldo)
        return this.saldo
    }
}


let resultado = contaBancaria.depositar(100)
console.log(`Você depositou, e seu saldo atual é ${resultado}`)
resultado = contaBancaria.sacar(85000)
console.log(`Você sacou, e seu saldo é ${resultado}`)
resultado = contaBancaria.mostrarSaldo()
console.log(`Seu saldo é ${resultado}`)

