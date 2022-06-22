const prompt = require('prompt-sync')();

const lerValor = () => {
    let valor1 = prompt('Valor 1')
    let valor2 = prompt('Valor 2')

    const valor1Init = valor1
    const valor2Init = valor2

    valor1 = valor2
    valor2 = valor1Init

    console.log('o valor 1', valor1Init, 'e o valor 2', valor2Init, 'se tornaram o valor 1', valor1, 'e o valor 2', valor2)


}
lerValor()