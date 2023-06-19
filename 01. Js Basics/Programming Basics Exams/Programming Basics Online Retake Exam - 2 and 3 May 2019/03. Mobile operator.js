function mobileOperator(input){
    let contractTerm = input[0];
    let contractType = input[1];
    let mobileData = input[2];
    let months = Number(input[3]);
    
    let price = 0;
    
    switch (contractType) {
        case "Small":
            switch (contractTerm) {
                case "one":
                    price = (mobileData === "yes") ? 15.48 * months : 9.98 * months;
                    break;
                case "two":
                    price = (mobileData === "yes") ? 14.08 * months : 8.58 * months;
                    price -= price * 0.0375;
                    break;
            }
            break;
        case "Middle":
            switch (contractTerm) {
                case "one":
                    price = (mobileData === "yes") ? 23.34 * months : 18.99 * months;
                    break;
                case "two":
                    price = (mobileData === "yes") ? 21.44 * months : 17.09 * months;
                    price -= price * 0.0375;
            }
            break;
        case "Large":
            switch (contractTerm) {
                case "one":
                    price = (mobileData === "yes") ? 30.33 * months : 25.98 * months;
                    break;
                case "two":
                    price = (mobileData === "yes") ? 27.94 * months : 23.59 * months;
                    price -= price * 0.0375;
                    break;
            }
            break;
        case "ExtraLarge":
            switch (contractTerm) {
                case "one":
                    price = (mobileData === "yes") ? 39.84 * months : 35.99 * months;
                    break;
                case "two":
                    price = (mobileData === "yes") ? 35.64 * months : 31.79 * months;
                    price -= price * 0.0375;
                    break;
            }
            break;
    }
    
    console.log(`${price.toFixed(2)} lv.`);
}
