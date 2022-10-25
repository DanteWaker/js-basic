//Desestruturacao

const { name: nome, age, nickname = 'Sem nick', naruto = 'Teste', ...others} = user

console.log(nome)
console.log(nickname)
console.log(naruto)