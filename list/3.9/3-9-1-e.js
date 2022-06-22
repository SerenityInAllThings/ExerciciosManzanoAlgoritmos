const exercicioE = (x,y,w) =>{
    const verificaSinal = -Math.pow(6,x)+2*y
    let mensagem
    try {
        if(verificaSinal < 0) throw "Atente-se para a possibilidade de uma raiz de número negativo",x,", por hora não trataremos de números imaginarios!"
        const resultado = verificaSinal/Math.pow(3,w)
        mensagem = "Sucesso"
        console.log(resultado)
    } catch (error) {
        mensagem = "Ocorreu um erro" + error
        console.log(error)
    }
}
exercicioE(13,1,2)