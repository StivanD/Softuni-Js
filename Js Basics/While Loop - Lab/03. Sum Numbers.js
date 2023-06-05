function sumNumbers(input){
    let num = Number(input[0]);
    let data = Number(input[1]);

    let sum = 0;
    let index = 1;

    while (sum < num) {

        data = Number(input[index]);
        sum += data;
        index++;
    }

    console.log(sum);
}