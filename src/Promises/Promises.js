/**
 * Nem tudo na programacao eh sincrono
 *  E precisamos continuar executando o codigo
 * enquanto esperamos essa informacao chegar
 * 
 */

 const somaDoisNumeros = (a, b) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(a + b)
  }, 2000)
})

/**
 * Para tratar a promise, vc usa o .then, para tratar o "sucesso"
 * e o .catch para tratar o erro
 */

somaDoisNumeros(3, 5).then(soma => console.log(soma)).catch((err) => err)


// fazendo fetch de uma api

fetch('https://api.github.com/users/dantewaker').then(response => console.log(response)).catch(err => console.log(err))


// usando finally, eh executado sempre
fetch('https://api.github.com/users/dantewaker')
.then(response => console.log(response))
.catch(err => console.log(err))
.finally(() => console.log('Naruto'))