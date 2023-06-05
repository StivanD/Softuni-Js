function sumPrimeNonPrime(input){
    let index = 0;
    let num = Number(input[index]);

    let primeSum = 0;
    let nonPrimeSum = 0;

    let isPrime = false;

     while (input[index] !== "stop") {
        if (num < 0) {
            console.log("Number is negative.");
            index++;
            num = Number(input[index]);
            continue;
        }

        isPrime = true;
        
        if (num === 1) {
            isPrime = false;
        }
        else {
            for (let i = num; i >= 2; i--) {
                if (num % i === 0 && i != num){
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            primeSum += num;
        }
        else {
            nonPrimeSum += num;
        }
        index++;
        num = Number(input[index]);
     }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
