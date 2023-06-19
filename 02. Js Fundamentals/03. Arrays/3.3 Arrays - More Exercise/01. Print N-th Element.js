function printNthElement(arr) {
    let steps = Number(arr[arr.length - 1])
    let newArr = [];
    for(let i = 0; i < arr.length - 1; i += steps) {
        newArr.push(arr[i]);
    }
    
    console.log(newArr.join(' '));
}
