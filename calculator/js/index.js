const screenOperation = document.getElementById('screen-operation');
const screenResult = document.getElementById('screen-result');
const buttons = document.getElementById('buttons');

let operationComplete = false;

const lastValue = () => screenOperation.textContent.substring(screenOperation.textContent.length-1)

//La función isNaN verifica si el valor que paso es un número válido para operar con dicho valor//

const writeOperation = text => {
    if (screenOperation.textContent=='0' && text != '.') screenOperation.textContent = '';

    if (operationComplete && isNaN (text)) {
        screenOperation.textContent = screenResult.textContent;
        operationComplete = false;
    }

    if (operationComplete && !isNaN(text)) {
        screenOperation.textContent = '';
        screenResult.textContent = '0';
        operationComplete = false;
    }

     // Para que se visualicen solo hasta 24 digitos//
    if (isNaN(lastValue()) && isNaN(text)) {
         screenOperation.textContent = screenOperation.textContent.substring(0, 
         screenOperation.textContent.length-1)
    }else if (screenOperation.textContent.length<24){
        screenOperation.textContent += text;
    }
}

const writeResult =() => {
    if(isNaN(lastValue()) && lastValue()!== ')') screenOperation.textContent = screenOperation.textContent.substring(0,
        screenOperation.textContent.length -1)
    screenResult.textContent = eval(screenOperation.textContent)
    operationComplete = true;

    // Para que si el resultado es mayor de 9 digitos, el resultado quede bajo las medidas de la calculadora//    
    if(screenResult.textContent.length> 9) {
        screenResult.style.fontSize = '1.21rem';
        screenResult.style.marginTop = '1.21rem';
    }
}
// Función extra para cambio de signo//
const changeSign = () => {
    let lastNumber = '';
    let position = 0;

    if(!isNaN(lastValue())) {
        for(let i = screenOperation.textContent.length-1; i>0; i--){
            if(isNaN(screenOperation.textContent[i])) {
                position = i+1;
                break;
            }
        }
    }

    lastNumber = screenOperation.textContent.substring(position);
    screenOperation.textContent = screenOperation.textContent.replace(lastNumber, (`${lastNumber*-1}`));
}

// Función para borrar//

const resetScreen = () => {
    screenOperation.textContent = '0';
    screenResult.textContent = '0';
}

buttons.addEventListener('click', e=> {
    if (e.target.textContent !== '') {
        switch (e.target.textContent) {
            case '=': writeResult();break;
            case 'C': resetScreen();break;
            case '+/-': changeSign();break;
            case ',': writeOperation('.');break;
            default: writeOperation(e.target.textContent);break;
        }
    }
})
