const calcularJuros = (value,tax,time) =>{
    const prestacaoJuros = value + (value*tax/100)*time

    console.log('O valor da nova prestação é de',prestacaoJuros,'dinheiros')
}
calcularJuros(1000,10,5)