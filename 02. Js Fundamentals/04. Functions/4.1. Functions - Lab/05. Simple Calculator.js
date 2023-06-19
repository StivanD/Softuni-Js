function simpleCalculations(num1, num2, operator) {
    let sum = 
        operator === 'add'
        ? num1 + num2
        : operator === 'subtract'
        ? num1 - num2
        : operator === 'multiply'
        ? num1 * num2
        : operator === 'divide'
        ? num1 / num2
        : 0;
        
    console.log(sum)

}
