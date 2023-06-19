function loadingBar(num) {

    let calucateBar = (num) => {
        let bar = '';
        let loaded = num / 10;
        
        if (loaded === 10) {
            for (let i = 0; i < loaded; i++) {
                bar += '%';
            }
        }
        else {
            for (let i = 0; i < loaded; i++) {
                bar += '%';
            }
            for (let i = loaded + 1; i <= 10; i++) {
                bar += '.';
            }
        }
        return bar;
    }
    
    if (num === 100) {
        console.log("100% Complete!");
        console.log(`[${calucateBar(num)}]`);
    }
    else {
        console.log(`${num}% [${calucateBar(num)}]`);
        console.log("Still loading...");
    }
}
