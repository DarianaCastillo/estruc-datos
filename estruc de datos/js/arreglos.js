let numeros = [34, 454, 23, 45, 3, 4, 60];

// Calcula la suma de los elementos del arreglo
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}

// Calcula el promedio
let promedio = suma / numeros.length;

// Muestra el promedio en pantalla
console.log("El promedio de los elementos del arreglo es: " + promedio);