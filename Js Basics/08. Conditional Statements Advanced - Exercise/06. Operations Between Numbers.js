function operationsBetweenNumbers(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];

    switch (operator) {
        case '+':
            console.log(`${num1} ${operator} ${num2} = ${num1 + num2} - ${(num1 + num2) % 2 == 0 ? "even" : "odd"}`);
            break;
        case '-':
            console.log(`${num1} ${operator} ${num2} = ${num1 - num2} - ${(num1 - num2) % 2 == 0 ? "even" : "odd"}`);
            break;
        case '*':
            console.log(`${num1} ${operator} ${num2} = ${num1 * num2} - ${(num1 * num2) % 2 == 0 ? "even" : "odd"}`);
            break;
        case '/':
            if(num2 === 0){
                console.log(`Cannot divide ${num1} by zero`);
            }
            else {
                console.log(`${num1} ${operator} ${num2} = ${(num1 / num2).toFixed(2)}`);
            }
            break;
        case '%':
            if(num2 === 0){
                console.log(`Cannot divide ${num1} by zero`);
            }
            else {
                console.log(`${num1} ${operator} ${num2} = ${(num1 % num2)}`)
            }
            break;
    }
}
