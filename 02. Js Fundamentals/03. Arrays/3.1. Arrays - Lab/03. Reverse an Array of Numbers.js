function reverseAnArrayOfNumbers(n, numbers) {
    let arr = [];
    
    for (let i = 0; i < n; i++) {
        arr.push(numbers[i]);
    }
    
    let reversed = arr.reverse().join(" ");
    
    console.log(reversed);
}
