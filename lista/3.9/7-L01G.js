const prompt = require('prompt-sync')();

const lerNumInt = () =>{
    const NumInt1 = parseInt(prompt('Numero 1: \n'))
    const NumInt2 = parseInt(prompt('Numero 2: \n'))
    const NumInt3 = parseInt(prompt('Numero 3: \n'))
    const NumInt4 = parseInt(prompt('Numero 4: \n'))

    const A = NumInt1
    const B = NumInt2
    const C = NumInt3
    const D = NumInt4

    //Propriedades distributivas multiplicação

    const AxB = A*B
    const AxC = A*C
    const AxD = A*D
    const BxC = B*C
    const BxD = B*D
    const CxD = C*D

    const AeB = A+B
    const AeC = A+C
    const AeD = A+D
    const BeC = B+C
    const BeD = B+D
    const CeD = C+D

    console.log(AxB,AxC,AxD,BxC,BxD,CxD,AeB,AeC,AeD,BeC,BeD,CeD)

}
lerNumInt()