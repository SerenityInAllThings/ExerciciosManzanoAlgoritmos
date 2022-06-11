const prompt = require('prompt-sync')();

const lerTemperaturaC = () =>{
    const grausC = parseFloat(prompt('Qual a temperatura em Celcius?'))

    const convertCelcius = (9*grausC+160)/5

    console.log('a temperatura em Celcius é de',grausC, "e o resultado da conversão para Fahrenheit é de:",convertCelcius)
}
lerTemperaturaC()