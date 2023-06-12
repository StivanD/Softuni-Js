function triangleOfNumbers(n) {
    for (let row = 1; row <= n; row++) {
        let currentLine = "";
        for (let col = 1; col <= row; col++) {
            currentLine += row + " ";
        }
        console.log(currentLine);
    }
}
