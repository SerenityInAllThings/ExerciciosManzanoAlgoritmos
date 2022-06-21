const prompt = require('prompt-sync')();

const lerTemperaturaF = () =>{
    const grausF = parseFloat(prompt('Qual temperatura em Fah.?'))

    if(!isNaN(grausF)){
    
        const converCelcius = (grausF-32)*(5/9)
        console.log('a temperatura em Fah. é de',grausF, "e o resultado da conversão para Celcius é de:",converCelcius)

    } else {
        console.log("digite um numero e não um texto desgraça")
    }

}
lerTemperaturaF()