
//arreglos por valor
let cheves = ['Tecate', 'Ultra', 'Corona'];

let mischeves = cheves;
cheves[0] = 'Sol';

console.log('Las cheves: '+cheves);
console.log('Mis cheves: ' + mischeves);

//areglos por referencia
let prueba1 = 'hola';
let prueba2 = prueba1;

console.log(prueba2);

//Recorrer los elementos del arreglo

//FOR

for(let i = 0; i <cheves.length; i++)
{
    console.log('Iterando sobre el arreglo: ' + cheves[i]);
}

//FORIN 
for (const key in cheves) {
   
        const element = cheves[key];
        console.log(key + ': ' + element);
    }

//FOROF
let valores = [10, 20, 30];
for (let key of valores) {  //defino los valores
        key += 1; //por cada vuelta a cada elemento le sumo 1
        console.log(key); 
    }

//let cadena = 'Hola mundo' // recorrer usando for of que me diga cuantos elementos tiene
