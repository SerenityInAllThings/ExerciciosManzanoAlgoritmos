const exercicioF = (a, b, c) => {

    const delta = Math.pow(b, 2) - 4 * a * c

    try {
        if (delta < 0) throw "Atente-se para a possibilidade de uma raiz de número negativo delta= "+ delta+ " , por hora não trataremos de números imaginarios!"

        const x1 = (-b + delta) / 2 * a
        const x2 = (-b - delta) / 2 * a

        console.log("Essas são as raizes dessa equação: X1=", x1, "X2=", x2)

    } catch (error) {
        console.log('Erro: ', error)
    }
}
exercicioF(1,-14,50)