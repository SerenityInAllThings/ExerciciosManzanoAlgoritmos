const prompt = require('prompt-sync')();

const calcularConsumo = () =>{
    const tempo = parseFloat(prompt('Quantas horas levou a viagem? \n'))
    const velocidade = parseInt(prompt('Qual a velocidade média do percurso em Km/h? \n'))
    const consumo = parseFloat(prompt('Qual consumo médio do veículo em Km/l? \n'))

    let distancia = velocidade*tempo
    try {
        if(consumo == 0) throw "o consumo não pode ser 0, se for 0 vc é noia seu filho da puta n existe carro q n consome, desgraça"
        let litrosUsados = distancia/consumo
        console.log('Velocidade média = ',velocidade,"Km/h--",'Tempo da viagem = ',tempo,'Horas--','Distancia percorrida = ',distancia,'Km--', 'e a quantidade de litros utilizados nessa viagem foi de: ',litrosUsados,'l')
        
    } catch (error) {
        console.log(error)
    }
}
calcularConsumo()