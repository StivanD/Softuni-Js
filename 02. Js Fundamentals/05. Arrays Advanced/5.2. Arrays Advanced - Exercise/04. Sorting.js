function sorting(arr) {
    let sorted = arr.sort((a, b) => b - a);
    let result = [];

    for (let i = 0; i < sorted.length / 2; i++) {
        if (i === (sorted.length / 2) - 0.5) {
            result.push(sorted[i]);
        } else {
            result.push(sorted[i], sorted[sorted.length - 1 - i]);
        }
    }

    console.log(result.join(' ')); 
}
