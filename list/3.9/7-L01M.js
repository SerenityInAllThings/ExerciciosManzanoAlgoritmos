const prompt = require('prompt-sync')();

const lerNumeros = () =>{
    const numA = parseFloat(prompt('Valor A:'))
    const numB = parseFloat(prompt('Valor B:'))
    const numC = parseFloat(prompt('Valor C:'))

    const somaQuad = Math.pow(numA+numB+numC,2)
    
    console.log('O quadrado da soma dos valores de' , numA,numB,numC,'É de:',somaQuad)
}
lerNumeros()