const array = [1,2,3,4,5,6, 'naruto'];

/**
 * Encontra a posicao do primeiro item que satisfaca a condicao, 
 * percorrendo o array em ordem.
 * Caso nenhum elemento esteja de acordo com a regra, e retornado undefined
 */

const newArray = array.findIndex(item => item % 2 === 0)

console.log(newArray)