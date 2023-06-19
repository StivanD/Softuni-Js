function favouriteMovie(input){
    let limit = 7;
    
    let movieName = input.shift();
    let moviesCount = 0;
    
    let bestMovie = {
        name: "",
        points: 0
    };
    
    while (movieName !== "STOP") {
        if (moviesCount >= limit) {
            console.log("The limit is reached.");
            break;
        }
        
        let currentMoviePoints = 0;
        for (let i = 0; i < movieName.length; i++) {
            currentMoviePoints += movieName.charCodeAt(i);
            
            if (movieName.charCodeAt(i) >= 65 && movieName.charCodeAt(i) <= 90) {
                currentMoviePoints -= movieName.length;
            }
            else if (movieName.charCodeAt(i) >= 97 && movieName.charCodeAt(i) <= 122) {
                currentMoviePoints -= movieName.length * 2;
            }
        }
        
        if (currentMoviePoints > bestMovie.points) {
            bestMovie.points = currentMoviePoints;
            bestMovie.name = movieName;
        }
        
        moviesCount++;
        movieName = input.shift();
    }
    
    console.log(`The best movie for you is ${bestMovie.name} with ${bestMovie.points} ASCII sum.`);
}
