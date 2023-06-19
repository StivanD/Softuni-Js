function matrix(n) {

    let makeArray = (n) => {
        let number = n;
        let emptyArr = [];
    
        for (let i = 0; i < n; i++) {
            emptyArr.push(number);
        }
        let newNum = emptyArr.join(' ');
        return newNum;
    }

    for (let i = 0; i < n; i++) {
        console.log(makeArray(n));
    }
}
