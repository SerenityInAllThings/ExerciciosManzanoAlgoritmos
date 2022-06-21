const prompt = require('prompt-sync')();

const lerNumeros = () =>{
    const numA = parseFloat(prompt('Valor A:'))
    const numB = parseFloat(prompt('Valor B:'))
    const numC = parseFloat(prompt('Valor C:'))

    const somaQuad = Math.pow(numA,2) + Math.pow(numB,2) + Math.pow(numC,2)
    
    console.log('A soma dos quadrados dos valores' , numA,numB,numC,'É de:',somaQuad)
}
lerNumeros()