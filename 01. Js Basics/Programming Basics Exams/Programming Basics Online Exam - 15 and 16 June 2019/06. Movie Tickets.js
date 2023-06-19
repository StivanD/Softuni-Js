function movieTickets(input){
    let [a1, a2, n] = [...input.map((x) => Number(x))];
    
    for (let i = a1; i <= a2 - 1; i++){
        for (let j = 1; j <= n - 1; j++) {
            for (let k = 1; k <= n / 2 - 1; k++) {
                if (i % 2 === 1 && (j + k + i) % 2 === 1) {
                    console.log(`${String.fromCharCode(i)}-${j}${k}${i}`);
                }
            }
        }
    }
}


