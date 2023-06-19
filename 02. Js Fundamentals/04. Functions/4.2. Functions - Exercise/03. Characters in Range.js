function charactersInRange(char1, char2) {
    let chars = '';
    
    let startChar = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    let endChar = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));
    
    for (let i = ++startChar; i < endChar; i++) {
        chars += String.fromCharCode(i) + " ";
    }
    
    console.log(chars);
}
