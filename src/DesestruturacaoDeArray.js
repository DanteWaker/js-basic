// desestruturacao com array
const array = [1,2,3,4,5,6,7,8,9]
const first = array[0]
console.log(first)
  //desestruturando
const [primeiro, , terceiro, ...rest] = array
console.log(primeiro)
console.log(terceiro)
console.log(rest)