//ejercicio 1
function numMayor(num1, num2, num3) {
    if (num1 === num2 && num2 === num3) {
      return "son iguales";
    } else {
      const max = Math.max(num1, num2, num3);
      return max;
    }
  }
  
  console.log(numMayor(3, 3, 3));


  //ejercicio 2
  function generar_caracteres(n, caracter)
  {
    
    if (n >= 1) {
      if (caracter.trim() !== '') {
        return caracter.repeat(n);
      } else {
        return 'El carácter no puede ser vacío o un espacio en blanco';
      }
    } else {
      return 'El número debe ser mayor o igual a 1';
    }

}
  let n = 5 ;
  let caracter = 'm';
  const resultado = generar_caracteres(n, caracter);
  console.log(resultado);
  console.log('Número de caracteres = '+ n);
 
// modificar el codigo de forma que tampoco acepte caracteres vacios
  