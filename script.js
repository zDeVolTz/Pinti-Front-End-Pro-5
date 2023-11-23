let checkValue = false;
let operationValue;
do {
  operationValue = prompt("Введіть бажану математичну операцію (add, sub, mult, div)");
  if(operationValue === "add" || 
    operationValue === "sub" || 
    operationValue === "mult" || 
    operationValue === "div"){
        checkValue = !checkValue;
    } else {
        alert("Ви ввели недійсну операцію");
    }
} while (checkValue === false)

const firstNumber = +prompt("Введіть перше число");
const secondNumber = +prompt("Введіть друге число");

switch (operationValue) {
    case "add" : 
        alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}` );
        break;
    case "sub" :
        alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}` );
        break;
    case "mult" :
        alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}` );
        break;
    case "div" :
        alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
        break;
    default :
        alert("Щось пішло не так");  
}