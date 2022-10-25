/**
 * Por padrao, toda funcao assincrona vira uma promise
 * 
 */

 async function buscandoDados() {
  try {
    const response = await fetch('https://api.github.com/users/dantewaker')

    const body = await response.json()
   
    console.log(body)
  } catch (err) {
    console.log(err)
  } finally {
    console.log('naruto')
  }
 
}

buscandoDados()