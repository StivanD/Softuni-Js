function condenseArrayToNumber(arr) {
    while (arr.length > 1) {
        let condensed = [];
        let sum = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            sum = arr[i] + arr[i + 1];
            condensed.push(sum);
     }
     arr = condensed;
    }

    console.log(arr[0]);
}
