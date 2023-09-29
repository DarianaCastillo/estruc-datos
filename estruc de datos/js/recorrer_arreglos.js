const letras_1 = ['a','b','c','d'];
const letras_2 = ['e','f','g'];

//concat
const resultado = letras_1.concat(letras_2);
console.log(resultado);

//includes
console.log(letras_1.includes('a'));

//push agrega un nuevo elemento al final del arreglo
console.log(letras_2.push('h'));//muestra la logitud del arreglo
console.log(letras_2);//muetra el arreglo

//pop elimina el ultimo elemento de un arreglo
letras_2.pop();//ejecuta la instrucción
console.log(letras_2); //muestra la instrucción

//reverse invierte el orden de los elementos del arreglo
console.log(letras_1.reverse());

//slice pone una copia de la porcion del arreglo
resultado2 = resultado.slice(2,4);
console.log(resultado2);

//splice
const frutas = ['pera', 'uva', 'manzana'];
 frutas.splice(1,2,'platano');
console.log(frutas);