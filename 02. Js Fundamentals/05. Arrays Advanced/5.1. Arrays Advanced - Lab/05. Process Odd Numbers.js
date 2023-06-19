function processOddNumbers(arr) {
    let result = [];
    
    for (let i = arr.length - 1; i > 0; i--) {
        if (i % 2 !== 0) {
            result.push(arr[i] * 2);
        }
    }
    
    console.log(result.join(' '));
}
