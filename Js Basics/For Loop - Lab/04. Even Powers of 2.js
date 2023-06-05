function evenPowersOf2(input){
    let num = Number(input[0]);

    for (let i = 0; i < num + 1; i += 2){
        console.log(2 ** i);
    }
}

evenPowersOf2(["4"]);