function bombNumbers(arr, bomb) {
    let [trigger, range] = bomb;
    let triggersCount = arr.filter((e) => e == trigger).length;

    function invalidRangeHandler(arr, trigger, range) {
        if (arr.indexOf(trigger) - range < 0) {
            let plus = arr.slice(0, arr.indexOf(trigger));
            arr.splice(0, plus.length + 1 + range);

        } else {
            arr.splice(arr.indexOf(trigger) - range, 1 + range * 2);

        }
    }
    
    for (let i = 0; i < triggersCount; i++) {
        if (arr.includes(trigger)) {
            invalidRangeHandler(arr, trigger, range);
        }
    }

    console.log(arr.reduce((a, b) => a + b, 0));
}
