function biggestOfThreeNumbers(n1, n2, n3) {
    let nums = [n1, n2, n3].sort((a, b) => b-a);
    
    console.log(Number(nums[0]));
}
