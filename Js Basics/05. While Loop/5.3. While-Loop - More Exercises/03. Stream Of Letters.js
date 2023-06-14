function streamOfLetters(input){
    let index = 0;
    let letter = input[index];

    let oHasOccured = false;
    let cHasOccured = false;
    let nHasOccured = false;

    let currentWord = "";
    let word = "";

    while (letter !== "End") {
        let appendLetter = false;
        if ((letter >= "a" && letter <= "z") || (letter >= "A" && letter <= 'Z')) {
            switch (letter) {
                case "o":
                    appendLetter = oHasOccured;
                    oHasOccured = true;
                    break;
                case "c":
                    appendLetter = cHasOccured;
                    cHasOccured = true;
                    break;
                case "n":
                    appendLetter = nHasOccured;
                    nHasOccured = true;
                    break;
                default:
                    appendLetter = true;
            }
        }
        
        if (appendLetter) {
            currentWord += letter;
        }

        if (oHasOccured && nHasOccured && cHasOccured) {
            word += currentWord + " ";
            currentWord = "";
            oHasOccured = false;
            cHasOccured = false;
            nHasOccured = false;
        }

        index++;
        letter = input[index];
    }
    console.log(word);
}
