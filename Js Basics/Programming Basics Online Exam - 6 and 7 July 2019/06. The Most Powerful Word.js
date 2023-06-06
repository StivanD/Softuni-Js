function theMostPowerfulWord(input){
    let currentWord = input.shift();
    
    let mostPowerfulWord = "";
    let bestPoints = 0;
    
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    
    while (currentWord !== "End of words") {
        let currentPoints = 0;
        for (let i = 0; i < currentWord.length; i++) {
            currentPoints += currentWord.charCodeAt(i);
        }
        
        if (vowels.includes(currentWord[0].toLowerCase())) {
            currentPoints *= currentWord.length;
        }
        else {
            currentPoints = Math.round(currentPoints / currentWord.length);
        }
        
        if (currentPoints > bestPoints) {
            bestPoints = currentPoints;
            mostPowerfulWord = currentWord;
        }
        
        currentWord = input.shift();
    }
    console.log(`The most powerful word is ${mostPowerfulWord} - ${bestPoints}`);
}
