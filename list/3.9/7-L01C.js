const isPositiveInteger = (metricas) => {
    return !isNaN(metricas) && metricas > 0
}

const calcularArea = (R, h) => {
    try {
        const metricas = [R, h]
        for (let i = 0; i < metricas.length; i++) {
            const metricasValue = metricas[i];
            if (!isPositiveInteger(metricasValue)) throw "Ce é burro seu lixo?"
        }
        const volume = Math.PI * Math.pow(R, 2) * h
        console.log('O volume da lata de óleo é:', volume, 'm³')
    } catch (error) {
        console.log(error)
    }

}
calcularArea(2, 3)