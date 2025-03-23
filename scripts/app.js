document.addEventListener('DOMContentLoaded', function() {
    // definir las constantes enlazandolas con el html
    const op1Input = document.getElementById('op1');
    const op2Input = document.getElementById('op2');
    const operadorInput = document.getElementById('operador');
    const calcularbot = document.getElementById('calcular');
    const resultadoDiv = document.getElementById('resultado');
    
    // Agregar event listener al botón calcular
    calcularbot.addEventListener('click', function() { //esto sirve para cuando el usuario le de click al botón de calcular se calcule
        // convertir los valores de entrada a números
        const op1 = parseFloat(op1Input.value);
        const op2 = parseFloat(op2Input.value);
        const operador = operadorInput.value.trim(); // trim funciona para que se eliminen los espacios en el campo del operador
        
        // verificar si los operandos son números válidos
        if (isNaN(op1) || isNaN(op2)) { //NaN es "Not a Number", traducido sería algo así como: si op1 no es un número o op2 no es un número, entonces me muestra el error
            resultadoDiv.innerHTML = '<span class="error">ERROR: ¡Por favor ingrese números válidos!</span>';
            return; // return sirve para poder salir de esta función, o sea, si no cumple con esto entonces sigue con el resto del código
        }
        
        // verificar si el operador es válido
        if (!['+', '-', '*', '/', '**', '%'].includes(operador)) {
            resultadoDiv.innerHTML = '<span class="error">ERROR: ¡Operador No Válido!</span>';
            return; //aquí lo que se hace es verificar que el operando ingresado sea valido con los requerimientos
        }
        
        // Realizar la operación correspondiente
        let resultado; //let es para una variable que no es fija
        
        switch (operador) { //switch evalua, compara y ejecuta según el caso que le den, en este caso lo usé para que me evalué todos los casos de la calculadora
            case '+':
                resultado = op1 + op2; //sumar op1 y op2
                break;
            case '-':
                resultado = op1 - op2; //restar op1 y op2
                break;
            case '*':
                resultado = op1 * op2; // multiplicar op1 y op2
                break;
            case '/':
                // Verificar división por cero
                if (op2 === 0) { //este if es para que cuando alguien quiera dividir por cero muestre el error
                    resultadoDiv.innerHTML = '<span class="error">ERROR: ¡No se puede dividir por cero!</span>';
                    return;
                }
                resultado = op1 / op2; // dividir op1 y op2
                break;
            case '**':
                resultado = Math.pow(op1, op2); //math.pow sirve para calcular el valor de op1 elevado a op2
                break;
            case '%':
                resultado = op1 % op2; // modular op1 y op2
                break;
        }
        
        // Mostrar el resultado
        resultadoDiv.textContent = `Resultado: ${resultado}`; // textContent sirve para establecer el texto de un elemento HTML, en este caso resultadoDiv
    });
});