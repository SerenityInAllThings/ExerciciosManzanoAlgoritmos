const prompt = require('prompt-sync')();

const letDolarParaReal = () =>{
    const lerDolar = parseFloat(prompt('Quantos dolares você quer  vender?'))
    const contacaoDolar = parseFloat(prompt('Qual a cotacao do dolar atual?'))

    const valorReal = lerDolar*contacaoDolar

    console.log('Você receberá R$',valorReal)


}
letDolarParaReal()