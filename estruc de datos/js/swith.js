
// con el switch se asignan casos y que pasara en cada caso
function operaciones(num1, num2, tipoOperacion) 
{

    switch (tipoOperacion) {
        case '+':
            return num1 + num2;
            
            break;

        case '-':
            return num1 - num2;
                
            break;

        case '*':
            return num1 * num2;
                
            break;
            
        case '/':
            return num1 / num2;
                
            break;
        
    
        default:
            break;
    }

}


const num1 = parseFloat(prompt("Ingrese un número:"));
const num2 = parseFloat(prompt("Ingrese un número:"));
const tipoOperacion = prompt("Ingrese el tipo de operación (+, -, *, /):")
const resultado = operaciones(num1, num2, tipoOperacion);
console.log(resultado);