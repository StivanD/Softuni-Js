function nonDecreasingSubset(arr) {
    let currentBiggest = arr[0];
    
    let result = arr.filter(element => {
        if (element >= currentBiggest) {
            currentBiggest = element;
        }
        return element >= currentBiggest;
    });
    
    console.log(result.join(' '));
}