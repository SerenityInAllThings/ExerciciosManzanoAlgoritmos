const prompt = require('prompt-sync')();

const letRealparaDolar = () =>{
    const lerReal = parseFloat(prompt('Quantos reais você quer  trocar?'))
    const contacaoDolar = parseFloat(prompt('Qual a cotacao do dolar atual?'))

    const valorReal = lerReal/contacaoDolar

    console.log('Você receberá $',valorReal.toFixed(2))


}
letRealparaDolar()