const exercicioC = (x) => {

    let message
    try {

        if(x <= -2) throw new Error ("O número não pode ser negativo")
        const xpow2 = Math.pow(x,2)
        console.log('1')
        const xsqrxPlus1 = Math.sqrt(x+1)
        console.log('2')
        const xpowxPlus1 = Math.pow(x,x+1)
        console.log('3')

        let resultado = (2*xpow2-3*xpowxPlus1/2)+(xsqrxPlus1/x)
        console.log('4')
        console.log(resultado)
        message = 'Sucesso'
    }
    catch (err){
        console.log(err)
        message = err.message
    }
    finally{
        console.log(message)
    }
   
}
exercicioC(-3)