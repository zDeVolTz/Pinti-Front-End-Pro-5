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
const SecondNumber = +prompt("Введіть друге число");

switch (operationValue) {
    case "add" : 
        alert(`${firstNumber} + ${SecondNumber} = ${firstNumber + SecondNumber}` );
        break;
    case "sub" :
        alert(`${firstNumber} - ${SecondNumber} = ${firstNumber - SecondNumber}` );
        break;
    case "mult" :
        alert(`${firstNumber} * ${SecondNumber} = ${firstNumber * SecondNumber}` );
        break;
    case "div" :
        alert(`${firstNumber} / ${SecondNumber} = ${firstNumber / SecondNumber}`);
        break;
    default :
        alert("Щось пішло не так");  
}