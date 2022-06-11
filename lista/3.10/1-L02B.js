const reajustarSalario = (SM, PR) => {
    try {
        if (isNaN(SM) || isNaN(PR) || SM <= 0) throw 'Insira um valor correto numerico'
        const transformPercent = PR / 100
        const fatorAumento = 1 + transformPercent
        const NS = SM * fatorAumento

        console.log("o novo salario sera de R$", NS)

    } catch (error) {

        console.log(error)
    }
}
reajustarSalario(1000, 15)
reajustarSalario(1000, 'a')
reajustarSalario('b', 15)
reajustarSalario(-1000, 15)