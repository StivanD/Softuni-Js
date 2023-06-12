function sumOfOddNumber(n) {
    let sum = 0;
    let num = 1;
    let counter = 1;
    
    while (counter <= n) {
        sum += num;
        console.log(num);
        
        num += 2;
        counter++;
    }
    
    console.log(`Sum: ${sum}`);
}

    // let sum = 0;
    // let counter = 0;

    // for (let i = 1; i <= 100; i += 2) {
    //     console.log(i);
    //     counter++;
    //     sum += i;

    //     if (counter === n ){
    //         console.log (`Sum : ${sum}`);
    //         break;
    //     }   
    // }
