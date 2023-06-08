function gymnastics(input){
    let country = input[0];
    let equipment = input[1];
    
    let points = 0;
    
    switch (country) {
        case "Russia":
            switch (equipment) {
                case "ribbon":
                    points = 18.5
                    break;
                case "hoop":
                    points = 19.1;
                    break;
                case "rope":
                    points = 18.6;
                    break;
            }
            break;
        case "Bulgaria":
            switch (equipment) {
                case "ribbon":
                    points = 19;
                    break;
                case "hoop":
                    points = 19.3;
                    break;
                case "rope":
                    points = 18.9
                    break;
            }
            break;
        case "Italy":
            switch (equipment) {
                case "ribbon":
                    points = 18.7;
                    break;
                case "hoop":
                    points = 18.8;
                    break;
                case "rope":
                    points = 18.85;
                    break;
            }
            break;
    }
    
    let percentage = ((20 - points) / 20) * 100;
    
    console.log(`The team of ${country} get ${points.toFixed(3)} on ${equipment}.`);
    console.log(`${percentage.toFixed(2)}%`);
}