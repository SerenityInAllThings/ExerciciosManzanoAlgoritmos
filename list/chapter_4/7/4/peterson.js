const { isPositiveInteger, isNumber } = require('../../../utils/utils')

const recuperarDiferencaAbsoluta = (primeiro, segundo) => {
  if (!isNumber(primeiro)) return NaN
  if (!isNumber(segundo)) return NaN
  if (!isPositiveInteger(primeiro)) 
    throw new Error('Primeiro parâmetro precisa ser um número inteiro positivo')
  if (!isPositiveInteger(segundo)) 
    throw new Error('Segundo parâmetro precisa ser um número inteiro positivo')

  const ordenados = [primeiro, segundo].sort((a, b) => a - b)
  const [menor, maior] = ordenados
  return maior - menor
}

const nothing = () => {}
module.exports.ex_a = recuperarDiferencaAbsoluta
module.exports.ex_b = nothing
module.exports.ex_c = nothing
module.exports.ex_d = nothing
module.exports.ex_e = nothing
module.exports.ex_f = nothing
module.exports.ex_g = nothing
module.exports.ex_h = nothing
module.exports.ex_i = nothing
module.exports.ex_j = nothing
module.exports.ex_k = nothing
module.exports.ex_l = nothing
module.exports.ex_m = nothing