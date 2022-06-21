const prompt = require('prompt-sync')();

const lerNumInt = () =>{
    const num1 = parseInt(prompt('Numero 1: \n'))
    const num2 = parseInt(prompt('Numero 2 \n'))

    const calculo = math.pow(num1 - num2,2)

    console.log('resultado do calculo:',calculo)
}
lerNumInt()