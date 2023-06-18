function smallestOfThreeNumbers(n1, n2, n3) {
    let arr = [];
    
    arr.push(n1, n2, n3);
    
    console.log(Math.min(...arr));
}
