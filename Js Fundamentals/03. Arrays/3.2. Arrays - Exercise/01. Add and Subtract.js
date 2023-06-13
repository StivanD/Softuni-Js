function addAndSubtract(arr) {
    let originalArrSum = 0;
    let modifiedArrSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        originalArrSum += arr[i];
        if (arr[i] % 2 === 0) {
            arr[i] += i;
        }
        else {
            arr[i] -= i;
        }
        modifiedArrSum += arr[i];
    }
    
    console.log(arr);
    console.log(originalArrSum);
    console.log(modifiedArrSum);
}
