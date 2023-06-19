function equalSums(arr) {
    let leftSum = 0;
    let rightSum = 0;
    let index = 0;
    let flag = false;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            rightSum += arr[j]
        }

        for (let j = i - 1; j >= 0; j--) {
            leftSum += arr[j];
        }

        if (rightSum === leftSum) {
            flag = true;
            index = i;
            break;
        }

        leftSum = 0;
        rightSum = 0;
    }

    if (flag) {
        console.log(index);
    } else {
        console.log("no");
    }
}