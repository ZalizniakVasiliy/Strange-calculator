const actionUser = prompt(
    `Choose the operations you want to apply to numbers, please:
     <add> - addition, <sub> - subtraction,
     <mult> - multiplication, <div> - division:`
  );

  const firstNumber = +prompt("Enter the first number, please:");
  const secondNumber = +prompt("Enter the second number, please:");

  function add() {
    let result = firstNumber + secondNumber;
    return result;
  }

  function sub() {
    let result = firstNumber - secondNumber;
    return result;
  }

  function mult() {
    let result = firstNumber * secondNumber;
    return result;
  }

  function div() {
    let result = firstNumber / secondNumber;
    return result;
  }

  let operations = {
    add: `${firstNumber} + ${secondNumber} = ${add()}`,
    sub: `${firstNumber} - ${secondNumber} = ${sub()}`,
    mult: `${firstNumber} * ${secondNumber} = ${mult()}`,
    div: `${firstNumber} / ${secondNumber} = ${div()}`,
  };

  console.log(operations[actionUser]);