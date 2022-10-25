//================================================================
/**
 * Objetos sao basicamente um tipo de 
 * estrutura de dados onde podemos armazenar um conjunto de 
 * chave e valor.
 */

 const user = {
  name: 'Jotaro',
  age: 27,
  nickname: 'Jojo',
  address: {
    street: 'Rua Jotaro',
    number: 176
  }
}

console.log('Objeto User: ' + user)

/**
 * Metodos
 */

// keys
// Retorna um array com todas as keys do objeto
console.log(Object.keys(user))

// values
// Retorna um array com todos os values do objeto
console.log(Object.values(user))

// entries
// Retorna um array com otros arrays contendo a key a value de cada um
console.log(Object.entries(user))
