function factorialDivision(num1, num2) {
    
    let numFactorial = (num) => {
        let factorial = 1;
        
        for (let i = num; i > 0; i--) {
            factorial *= i;
        }
        return factorial;
    }
    
    let divideFactorials = (num1, num2) => {
        let result = numFactorial(num1) / numFactorial(num2);
        
        return result;
    }
    
    console.log(divideFactorials(num1, num2).toFixed(2));
}
