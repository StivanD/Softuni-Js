function pipesInPool(input){
    let poolVolume = Number(input[0]);
    let firstPipeFlowRate = Number(input[1]);
    let secondPipeFlowRate = Number(input[2]);
    let hours = Number(input[3]);

    let totalPipeFilling = firstPipeFlowRate * hours + secondPipeFlowRate * hours;

    if (totalPipeFilling <= poolVolume) {
        let percentageFilled = (totalPipeFilling / poolVolume * 100).toFixed(2);
        let firstPipePercentage = ((firstPipeFlowRate * hours / totalPipeFilling) * 100).toFixed(2);
        let secondPipePercentage = ((secondPipeFlowRate * hours / totalPipeFilling) * 100).toFixed(2);
        console.log(`The pool is ${percentageFilled}% full. Pipe 1: ${firstPipePercentage}%. Pipe 2: ${secondPipePercentage}%.`);
    }
    else {
        console.log(`For ${hours.toFixed(2)} hours the pool overflows with ${(totalPipeFilling - poolVolume).toFixed(2)} liters.`);
    }
}
