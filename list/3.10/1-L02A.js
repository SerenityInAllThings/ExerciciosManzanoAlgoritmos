const multiplicador = (A, B, C, D) => {

    try {
        if (isNaN(A) || isNaN(B) || isNaN(C) || isNaN(D)) throw 'Por favor digite um número e não um texto'

        let P = A * C
        let S = B + D

        console.log('a operação de soma é', S, 'e a de multiplicar é', P)

    } catch (error) {
        console.log(error)

    }

}
multiplicador(2, 3, 4, 5)
multiplicador('Puta', 3, 4, 5)