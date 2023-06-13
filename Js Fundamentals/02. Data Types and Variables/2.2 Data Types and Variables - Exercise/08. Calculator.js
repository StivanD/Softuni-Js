function calculator(num1, operator, num2) {
    let res = 0;
            
    switch (operator) {
        case '+':
            res = num1 + num2;
            break;
        case '-':
            res = num1 - num2;
            break;
        case '/':
            res = num1 / num2;
            break;
        case '*':
            res = num1 * num2;
            break;
    }
    
    console.log(res.toFixed(2));
}


// function calculator(num1, operator, num2) {
//     let res = 0;
    
//     res = 
//         operator === '+' 
//             ? num1 + num2
//             : operator === '-'
//             ? num1 - num2
//             : operator === '/'
//             ? num1 / num2
//             : operator === '*'
//             ? num1 * num2
//             : 0;
            
//     console.log(res.toFixed(2));
// }

