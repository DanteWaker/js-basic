const array = [1,2,3,4,5,6];

//retorna um booleado se TODOS os elementos de um array
// respeitar uma determnada condicao
const newArray = array.every(item => typeof item === `number`)

console.log(newArray)

/**
 * se pelo menos um deles nao respeitar essa regra,
 * vai ser retornado false
 */