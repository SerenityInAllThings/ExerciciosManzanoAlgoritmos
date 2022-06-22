const prompt = require('prompt-sync')();

const lerTemperaturaC = () => {
    const grausC = parseFloat(prompt('Qual a temperatura em Celcius?'))

    try {
        if (isNaN(grausC)||grausC < -273.15) throw "Temperatura é um numero seu retardado ou tu é o bixão memo hein"

        const convertCelcius = (9 * grausC + 160) / 5
        console.log('a temperatura em Celcius é de', grausC, "e o resultado da conversão para Fahrenheit é de:", convertCelcius)

    } catch (error) {
        console.log(error)
    }

}
lerTemperaturaC()
