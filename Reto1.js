// Reto #1: ¡Automatizando envolver regalos de navidad!
/*
  --------------------
  |   Instrucciones   |
  --------------------
  
  Este año los elfos han comprado una máquina que envuelve regalos. Pero... ¡no viene programada! 
  Necesitamos crear un algoritmo que le ayude en la tarea.
  
  A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la 
  máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.
  
  El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * de forma 
  que rodee totalmente al string por todos los lados. Por ejemplo:

  Como ves, el papel de regalo envuelve el string. Por arriba y por abajo, para no dejar ningún 
  hueco, las esquinas también están cubiertas por el papel de regalo.

  Nota:El carácter \n representa un salto de línea.
  
  ¡Ojo!Asegúrate que pones el número correcto de * para envolver completamente el string.

¡Suerte!
*/
 const gifts = ['book', 'game', 'socks']
 const wrapped = wrapping(gifts)
 console.log(wrapped)
  /* [
     "******\n*book*\n******",
     "******\n*game*\n******",
     "*******\n*socks*\n*******"
   ] */

function wrapping(gifts) {
  let newArray = [];
    for (let x in gifts) {
      const repetir = '*'.repeat(gifts[x].length + 2) 
      newArray.push(`${repetir}\n*${gifts[x]}*\n${repetir}`);
    }
    return newArray;
}

// Mejorado 
function wrapping(gifts) {
  return gifts.map(gift => `${'*'.repeat(gift.length + 2)}\n*${gift}*\n${'*'.repeat(gift.length + 2)}`);
}
