function palindromeIntegers(arr) {
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i].toString();
        let reversedElement = currentElement.split("").reverse().join("");
        
        if (currentElement === reversedElement) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
}
