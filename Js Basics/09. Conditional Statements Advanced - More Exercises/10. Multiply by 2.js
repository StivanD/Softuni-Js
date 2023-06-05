function multiplyBy2(input) {
    let index = 0;
    let num = Number(input[index]);

    while (num >= 0) {
        console.log(`Result: ${(num * 2).toFixed(2)}`)
        index++;
        num = Number(input[index]);
    }
    if (num < 0) {
        console.log("Negative number!");
    }
}
