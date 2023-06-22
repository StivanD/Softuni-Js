function searchForNumber(input, search) {
    let [numbersToTake, numbersToDelete, searchedNumber] = search;
    
    input = input.slice(0, numbersToTake);
    input.splice(0, numbersToDelete);
    
    counter = 0;
    
    for (num of input) {
        if (num === searchedNumber) {
            counter++;
        }
    }
    
    console.log(`Number ${searchedNumber} occurs ${counter} times.`);
}
