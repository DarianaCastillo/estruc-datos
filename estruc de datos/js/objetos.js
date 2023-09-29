const productos = 
[
{
    nombre: 'Manzana',
    categoria: 'Frutas',
    precio: 8.25,
    nutrientes: {
    carbs: 0.98,
    grasas: .005,
    proteinas: 2.1
},
    caducidad:'2023-08-29',
},

{
    nombre: 'Papa',
    categoria: 'Verdura',
    precio: 9.25,
    nutrientes: {
    carbs: 0.108,
    grasas: .004,
    proteinas: 1.1
},
    caducidad:'2023-09-29',
},


];

console.log(productos);
//pedir un solo elemento con corchetes
//console.log(productos['nombre']);

//pedir un solo elemento con punto
//console.log(productos.nombre);

//pedir varios elementos con punto
//console.log(productos.nombre, productos.precio, productos.caducidad);

//pedir los productos cuando hay varios con punto
console.log(productos[1].nombre, productos[1].precio, productos[1].caducidad);

//perdir los sub elementos
//console.log(productos.nombre, productos.nutrientes.proteinas);

const frutas = {};
frutas.nombre = 'Uvas';
frutas.color = 'Verde';
console.log(frutas);
console.log(frutas.nombre);