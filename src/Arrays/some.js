const array = [1,2,3,4,5,6, 'naruto'];

//retorna um booleado se PELO MENOS UM dos elementos de um array
// respeitar uma determnada condicao
const newArray = array.some(item => typeof item === `string`)

console.log(newArray)