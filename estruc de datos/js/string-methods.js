
//funciones de cadena de java- operaciones que podemos aplicar sobre el mensaje-
let mensaje = "Hola mundo";
let mensaje2 = "¿Cómo estan?";
let mensaje3= "8";

console.log(mensaje.length); //devuelve la longitud de la cadena

console.log(mensaje.slice(0, 9)); //devuelve un parte del mensaje y solo es de tipo string

console.log(mensaje.toUpperCase()); // aparece todo con mayuscula
console.log(mensaje.toLowerCase()); //convierte todo en minuscula

console.log(mensaje.trim()); //quita espacios en blanco, limpia la cadena

console.log(mensaje.charAt(5)); //regresa el caracter dependiendo del indice que pongamos

//practicarlas para la sig clase presentarlas.
console.log(mensaje.concat(mensaje2)); //une 2 mensajes

console.log(mensaje.indexOf("Hola")); // Dice en qué índice está el caracter que pongamos, si se repite pondrá el primero que encuentre
console.log(mensaje.lastIndexOf("m")); //Dice en qué índice está el caracter que pongamos, si se repita pondrá ultimo que encuentre 
console.log(mensaje.search("o"));//Busca en qué índice está el caracter que pongamos i

console.log(mensaje.replace("mundo", "amor"));//remplaza una palabra del mensaje original

console.log(mensaje.substring(0, 2)); //extrae los caracteres que estan en el intervalo de indices que pongamos

console.log(mensaje3.toString()); //retorna una cadena representando el codigo fuente de la función

console.log(mensaje.includes("mu"));//evalua si hay o no los caracteres en la cadena
 

//explicación de typeof y valueof
const s = new String ('test');// new es para crear una clase en este caso se llama string
typeof s; //tipo de la variable
s.valueOf() // que es lo que contiene la variable, en este caso es test
console.log(s.valueOf() + ' es de tipo: '+ typeof(s)); //nos permite ver el valor de una cadena
console.log((typeof(s.valueOf)));


//explicación toString
let numero = 100;//number
console.log(typeof(numero)); 
console.log(typeof(numero.toString()));//para cambiar el tipo de variable a string

let cadena2='hola';//string
console.log(typeof(cadena2)); 
console.log(typeof(parseFloat(cadena2)));//number

let operacion = parseInt('100') + 100; //suma los valores
console.log(operacion);