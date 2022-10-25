//Desestruturacao

const { name: nome, age, nickname = 'Sem nick', naruto = 'Teste', ...others} = user

console.log(nome)
console.log(nickname)
console.log(naruto)

// Rest Operator
/**
 * com os 3 pontos, vc pega todos os elementos que falta, em uma desestruturacao
 */
console.log(others)