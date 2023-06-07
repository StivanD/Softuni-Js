function movieRatings(input){
    let moviesCount = Number(input[0]);
    
    let highestRatings = {
        movie: "",
        rating: Number.MIN_VALUE
    };
    
    let lowestRatings = {
        movie: "",
        rating: Number.MAX_VALUE
    };
    
    let averageRating = 0;
    
    let index = 1;
    
    for (let i = 1; i <= moviesCount; i++) {
        let currentMovie = input[index];
        let currentMovieRating = Number(input[index + 1]);
        
        averageRating += currentMovieRating;
        
        if (currentMovieRating > highestRatings.rating) {
            highestRatings.movie = currentMovie;
            highestRatings.rating = currentMovieRating;
        }
        
        if (currentMovieRating < lowestRatings.rating) {
            lowestRatings.movie = currentMovie;
            lowestRatings.rating = currentMovieRating;
        }
        
        index += 2;
    }
    
    console.log(`${highestRatings.movie} is with highest rating: ${highestRatings.rating.toFixed(1)}`);
    console.log(`${lowestRatings.movie} is with lowest rating: ${lowestRatings.rating.toFixed(1)}`);
    console.log(`Average rating: ${(averageRating / moviesCount).toFixed(1)}`);
}
