const prompt = require('prompt-sync')();

const lerTemperaturaF = () =>{
    const grausF = parseFloat(prompt('Qual temperatura em Fah.?'))

    const converFahren = (grausF-32)*(5/9)

    console.log('a temperatura em Celcius é de',grausF, "e o resultado da conversão para Fahrenheit é de:",converFahren)
}
lerTemperaturaF()