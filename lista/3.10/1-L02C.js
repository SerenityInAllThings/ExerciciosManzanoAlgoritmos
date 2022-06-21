const isPositiveInteger = (votos) =>{
    return Number.isInteger(votos) && votos > 0 && !isNaN(votos)
}

const contarVotos = (nulos, candidatoA, candidatoB, candidatoC, brancos) => {
    try {
        if(
            isNaN(nulos) || 
            isNaN(candidatoA) || 
            isNaN(candidatoB) || 
            isNaN(candidatoC) || 
            isNaN(brancos) ||
            candidatoA < 0 || 
            candidatoB < 0 || 
            candidatoC < 0 ||
            nulos < 0 ||
            brancos < 0 ||
            !Number.isInteger(candidatoA)||
            !Number.isInteger(candidatoB)||
            !Number.isInteger(candidatoC)||
            !Number.isInteger(brancos)||
            !Number.isInteger(nulos)
            ) throw 'error contacte o administrador do sistema FODASE'

        const TotalEleitores = nulos+candidatoA+candidatoB+candidatoC+brancos
        console.log("Total de eleitores",TotalEleitores)

        const percentValidVotes = (candidatoA+candidatoB+candidatoC)*100/TotalEleitores
        console.log('Valor em percentural do total de votos em relação ao numero total de eleitores:',percentValidVotes,'%')

        const percentValidA = candidatoA*100/TotalEleitores
        console.log('O valor percentual de votos validos do candidato A em relação ao total de votos é de:',percentValidA,'%')

        const percentValidB = candidatoB*100/TotalEleitores
        console.log('O valor percentual de votos validos do candidato B em relação ao total de votos é de:',percentValidB,'%')

        const percentValidC = candidatoC*100/TotalEleitores
        console.log('O valor percentual de votos validos do candidato C em relação ao total de votos é de:',percentValidC,'%')

        const percentNull = nulos*100/TotalEleitores
        console.log('O valor percentual de votos nulos em relação ao total de votos é de:',percentNull,'%')

        const percentWhite = brancos*100/TotalEleitores
        console.log('O valor percentual de votos validos do candidato A em relação ao total de votos é de:',percentWhite,'%')

    } catch (error) {
        console.log(error)
    }
}
contarVotos(100, 150, 200, 250, 300)
contarVotos(100.5, 150, 200, 250, 300)
contarVotos(100, 'a', 200, 250, 300)
contarVotos(100, 150, -200, 250, 300)
contarVotos(-100, 150, 200, 250, 300)
