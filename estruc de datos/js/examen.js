//Ejercicio 1 Invertir un arreglo
const numeros_1 = [1, 454,23,42,11,3,9];
console.log(numeros_1); //imprimimos el arreglo en orden
console.log(numeros_1.reverse()); //reverse invierte el orden de los elementos del arreglo

//Ejercicio 2 Suma de elementos de un arreglo
const numeros_2 =[4, 5, 10, 1];

let suma = 0; //inicializamos la variable contador en 0
for (let i = 0; i < numeros_2.length; i++) {
  suma += numeros_2[i]; 
}//iteramos sobre cada número del arreglo
// el bucle se repetirá mientras i sea menor que la cantidad de la longitud del arreglo 
//en cada iteración se sumará en elemento en la posición i al valor actual de suma
 console.log ("La suma de los números del arreglo es:" + suma);

 //Ejercicio 3 Contar la cantidad de elementos mayores a un valor dado

 const numeros_3 = [2, ,5, 9, 12, 43,56, 66, 32, 342];

 function contarMayores(numeros_3, valor) { 
   
    let contador = 0;// Inicializamos un contador para llevar la cuenta de elementos mayores
  
    for (let i = 0; i < numeros_3.length; i++) {
      if (numeros_3[i] > valor) {
        contador++;
      }
    }  // Recorremos el arreglo y comparamos cada elemento con el valor dado
  
    // Devolvemos el resultado
    return contador;
  }
  
  const valor = 12; //Valor con el que compararemos los elementos del arreglo
  
  const cantidadMayores = contarMayores(numeros_3, valor);
  console.log("La cantidad de elementos mayores que " +valor, "es:" + cantidadMayores);
  
