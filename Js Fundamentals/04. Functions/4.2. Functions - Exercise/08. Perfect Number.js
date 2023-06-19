function perfectNumber(num) {

    let makeArrayFromNum = (num) => {
        let divisors = [];
        let number = 0;
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                number = i;
                divisors.push(number)
            }
        }
        let sum = 0;
        for (let i = 0; i < divisors.length; i++) {
            sum += divisors[i];
        }
        return sum;
    }

    if (makeArrayFromNum(num) % 2 === 0 && makeArrayFromNum(num) === num) {
        console.log('We have a perfect number!');
    } else {
        console.log(`It's not so perfect.`);
    }
}