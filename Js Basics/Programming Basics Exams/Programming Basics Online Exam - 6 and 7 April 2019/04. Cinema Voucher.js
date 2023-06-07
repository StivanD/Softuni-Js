function cinemaVoucher(input){
    let voucherValue = Number(input[0]);
    
    index = 1;
    let currentMovie = input[index];
    
    let movieTicketsCount = 0;
    let others = 0;
    
    while (currentMovie !== "End") {
        let movieOrProductPrice = 0;
        
        if (currentMovie.length > 8) {
            movieOrProductPrice = currentMovie.charCodeAt(0) + currentMovie.charCodeAt(1);
            if (movieOrProductPrice <= voucherValue) {
                voucherValue -= movieOrProductPrice;
                movieTicketsCount++;
            }
            else {
                break;
            }
        }
        else {
            movieOrProductPrice = currentMovie.charCodeAt(0);
            if (movieOrProductPrice <= voucherValue) {
                voucherValue -= movieOrProductPrice;
                others++;
            }
            else {
                break;
            }
        }
        
        movieOrProductPrice = 0;
        index++;
        currentMovie = input[index];
    }
    console.log(movieTicketsCount);
    console.log(others);
}