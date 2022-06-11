const prompt = require('prompt-sync') ({})

const lerTemp = parseFloat(prompt("Digite a temperatura em Celsius : "))
const fahrenheit = ((9 * lerTemp) + 160) / 5
console.log (fahrenheit)


const lerTemp = parseFloat(prompt("Digite a temperatura em Fahrenheit : "))
const celsius = (lerTemp - 32) * (5 / 9)
console.log (celsius)


const askAltura= parseFloat(prompt("Digite o altura do objeto : "))
const askRaio = parseFloat(prompt("Digite o raio do objetvo : "))
const pizao = Math.PI
let volume = pizao * Math.pow(askRaio,2) * askAltura
console.log (volume)


Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um
automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto
(TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a
distância percorrida com a fórmula DISTANCIA  TEMPO * VELOCIDADE. Possuindo o valor da
distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula
LITROS_USADOS  DISTANCIA / 12. Ao final, o programa deve apresentar os valores da velocidade
média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a
quantidade de litros (LITROS_USADOS) utilizada na viagem.

const askTime = parseFloat(prompt("A quanto tempo você está dirigindo o carro : "))
const askSpeed = parseFloat(prompt("Em qual velocidade? : "))
const distanciaTempo = askTime * askSpeed
const litrosUsados = distanciaTempo / 12
console.log (distanciaTempo)
console.log (askTime)
console.log (litrosUsados)
console.log (askSpeed)

Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula
PRESTACAO  VALOR + (VALOR * TAXA/100) * TEMPO).

const prestacao = parseFloat(prompt("Prestação : "))
const valor = parseFloat(prompt("Valor: "))
const taxa = parseFloat(prompt("taxa : "))
const tempo = parseFloat(prompt("tempo : "))
const total = prestacao + (valor * taxa / 100) * tempo
console.log (total)

Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de
forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da
variável A. Apresentar os valores trocados

let a = parseInt(prompt("Digite : "))
let b = parseInt(prompt("Digite : "))
a = b
b = a
console.log (a)
console.log (b)

Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na
utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D,
devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim
C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de
multiplicação e apresentar doze resultados de saída.

let a = 2
let b = 3
let c = 4
let d = 5

console.log (a + b)
console.log (a * b)
console.log (a + c)
console.log (a * c)
console.log (a + d)
console.log (a * d)
console.log (b + c)
console.log (b * c)
console.log (b + d)
console.log (b * d)
console.log (c + d)
console.log (c * d)

Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula
VOLUME  COMPRIMENTO * LARGURA * ALTURA.

const criarCaixaRetangular = (a,b,c) => {
    console.log (a * b * c)
}
criarCaixaRetangular(2,4,6)

Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo
segundo.

const lerNumerosInteiros = (primeiro,segundo) => {
    let um = primeiro ** 2
    let dois = segundo ** 2 
    if ( primeiro > segundo) {
        console.log ("A diferença entre ambos é de : " , um - dois)
    } else if ( segundo > primeiro) {
        console.log  ("A diferença entre ambos é de : " , dois - um)
    }
}
lerNumerosInteiros (4,6)

Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em
dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares
disponível com o usuário, para que seja apresentado o valor em moeda brasileira.

const conversãoDolarReal = (dolar,real) => {
    let cotaçãoDolar = parseFloat(prompt("Atualmente qual é a cotação do $? :"))
    let dinheiroCarteiroa = parseFloat(prompt("Quantos R$ você tem atualmente? :"))
    let valorEmDolares = dinheiroCarteiroa / cotaçãoDolar
    console.log ("Seu total de R$ é de :",valorEmDolares)

}
conversãoDolarReal(10,55)


k) Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em
real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível
com o usuário, para que seja apresentado o valor em moeda americana.

const conversãoRealDolar = (dolar,real) => {
    let dinheiroCarteiroa = parseFloat(prompt("Quantos R$ você tem atualmente? :"))
    let cotaçãoDolar = parseFloat(prompt("Atualmente qual é a cotação do $? :"))
    let valorEmDolares = dinheiroCarteiroa / cotaçãoDolar
    console.log ("Seu total de $ é de :",valorEmDolares)

}
conversãoRealDolar()

Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à
soma dos quadrados dos três valores lidos.

const somarQuadradoABC = () => {
    const opçãoA = parseFloat(prompt("Digite um valor para opção A: "))
    const opçãoB = parseFloat(prompt("Digite um valor para opção B: "))
    const opçãoC = parseFloat(prompt("Digite um valor para opção C: "))
    const resultadoQuadrado = opçãoA ** 2 + ((opçãoB ** 2) + opçãoC ** 2)
    console.log ("o resultado da equação geral ao quadrado é : ", resultadoQuadrado)
 
}
somarQuadradoABC()

m) Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o
quadrado da soma dos três valores lidos.

const mostrarQuadradoDasSomas = () => {
    const opçãoA = parseFloat(prompt("Digite um valor para opção A: "))
    const opçãoB = parseFloat(prompt("Digite um valor para opção B: "))
    const opçãoC = parseFloat(prompt("Digite um valor para opção C: "))
    const resultadoQuadrado = (opçãoA + opçãoB + opçãoC) ** 2
    console.log (resultadoQuadrado)
}
mostrarQuadradoDasSomas()

EXTRAS
a) Elaborar um programa de computador que efetue a leitura de quatro valores inteiros (variáveis A, B, C e
    D). Ao final o programa deve apresentar o resultado do produto (variável P) do primeiro com o terceiro
    valor, e o resultado da soma
    (variável S) do segundo com o quarto valor.

const lerValoresInt = () => {
    let valorIntA = 2
    let valorIntB = 4
    let valorIntC = 6
    let valorIntD = 8
    let resultaoP = valorIntA * valorIntC
    let resultadoS = valorIntB * valorIntD
    console.log (resultaoP)
    console.log (resultadoS) 
}
lerValoresInt()

b) Ler o valor correspondente ao salário mensal (variável SM) de um trabalhador e também o valor do 
percentual de reajuste (variável PR) a ser atribuído. Apresentar o valor do novo salário (variável NS).

const calcularSalarioReajuste = () => {
    let salario = 1000
    let percentualReajuste = 0.04
    let NS = (salario * percentualReajuste) + salario
    console.log (NS)
}
calcularSalarioReajuste()

c) Em uma eleição sindical concorreram ao cargo de presidente três candidatos (A, B e C). Durante a 
apuração dos votos foram computados votos nulos e votos em branco, além dos votos válidos para 
cada candidato. Deve ser criado um programa de computador que efetue a leitura da quantidade de 
votos válidos para cada candidato, além de efetuar também a leitura da quantidade de votos nulos e 
votos em branco. Ao final o programa deve apresentar o número total de eleitores, considerando votos 
válidos, nulos e em branco; o percentual correspondente de votos válidos em relação à quantidade de 
eleitores; o percentual correspondente de votos válidos do candidato A em relação à quantidade de 
eleitores; o percentual correspondente de votos válidos do candidato B em relação à quantidade de 
eleitores; o percentual correspondente de votos válidos do candidato C em relação à quantidade de 
eleitores; o percentual correspondente de votos nulos em relação à quantidade de eleitores; e por último 
o percentual correspondente de votos em branco em relação à quantidade de eleitores.

// const elegerSindico = () => {
//     let sindicoA = 45
//     let sindicoB = 72
//     let sindicoC = 89
//     let nulo = 24
//     let branco = 12
//     let validos = sindicoA + sindicoB + sindicoC +  branco
//     let totalEleitores = sindicoA + sindicoB + sindicoC + nulo + branco
//     console.log ("Votos validos", validos , "\nTotal de eleitores" , totalEleitores)
// }
// elegerSindico()