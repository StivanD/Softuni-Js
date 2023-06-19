function primeNumberChecker(num) {
    let isPrime = true;

    if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    
    console.log(isPrime);
}
