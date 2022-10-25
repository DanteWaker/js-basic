const array = [1,2,3,4,5,6];

/**
 * Usado para criar algo totalmente novo com base no array original
 * Eh possivel basicamente fazer o que quiser com ele
 * 
 * Acc eh o accumulator, que eh o valor acumulado ate o momento na funcao
 * O item eh o proprio item da iteracao
 * 
 * O reduce recebe tbm outro parametro ao inves da funcao
 * Que e o valor iniciao da iteracao, ou seja, o valor inicial do acc
 */

const newArray = array.reduce((acc, item) => acc + item , 4)

console.log(newArray)