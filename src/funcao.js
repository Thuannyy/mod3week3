/**
 * Valida se um número esta entre 2 patamares
 * 
 */
function idadeValida (numero) {
    /**
     * expressão regular para validar o número entre 18 e 65
     */

    // se o valor passado não cumprir com o padrão da expressão regular 
    // é gerada um exceção 
    if (numero<18 || numero>65) {
        throw new Error('Idade fora dos padrões de aceitação')
    }

    else { console.log("A idade" + numero + "é válida"); }

    //retorna
    return numero; 
  }

  try { console.log('Idade valida entre 18 e 65 anos.\n')}

  catch (err) { console.log(err.message); }
    // valor com um padrão aceito

    module.exports = {idadeValida}
