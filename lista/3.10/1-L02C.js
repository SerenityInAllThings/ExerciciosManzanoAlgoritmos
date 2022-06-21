const isPositiveInteger = (votos) =>{
    return Number.isInteger(votos) && votos > 0 && !isNaN(votos)
}

const contarVotos = (nulos, candidatoA, candidatoB, candidatoC, brancos) => {
    try {
        const votos = [nulos,candidatoA,candidatoB,candidatoC,brancos] 
        for (let i=0; i<votos.length; i++) {     //v1
            const votosAtuais = votos[i]
            if (!isPositiveInteger(votosAtuais))
                throw 'error contacte o administrador do sistema FODASE'
        
            // if (votos.some(v => !isPositiveInteger(v))) //v2
            //     throw 'aaa'        
        }

        const TotalEleitores = nulos + candidatoA + candidatoB + candidatoC + brancos
        console.log("Total de eleitores", TotalEleitores)

        const percentValidVotes = (candidatoA + candidatoB + candidatoC) * 100 / TotalEleitores
        console.log('Valor em percentural do total de votos em relação ao numero total de eleitores:', percentValidVotes, '%')

        const percentValidA = candidatoA * 100 / TotalEleitores
        console.log('O valor percentual de votos validos do candidato A em relação ao total de votos é de:', percentValidA, '%')

        const percentValidB = candidatoB * 100 / TotalEleitores
        console.log('O valor percentual de votos validos do candidato B em relação ao total de votos é de:', percentValidB, '%')

        const percentValidC = candidatoC * 100 / TotalEleitores
        console.log('O valor percentual de votos validos do candidato C em relação ao total de votos é de:', percentValidC, '%')

        const percentNull = nulos * 100 / TotalEleitores
        console.log('O valor percentual de votos nulos em relação ao total de votos é de:', percentNull, '%')

        const percentWhite = brancos * 100 / TotalEleitores
        console.log('O valor percentual de votos validos do candidato A em relação ao total de votos é de:', percentWhite, '%')

    } catch (error) {
        console.log(error)
    }
}
contarVotos(100, 150, 200, 250, 300)
contarVotos(100.5, 150, 200, 250, 300)
contarVotos(100, 'a', 200, 250, 300)
contarVotos(100, 150, -200, 250, 300)
contarVotos(-100, 150, 200, 250, 300)
