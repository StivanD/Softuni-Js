function movieProfit(input){
    let seriesName = input[0];
    let seasonsCount = Number(input[1]);
    let episodesCount = Number(input[2]);
    let episodeDuration = Number(input[3]);
    
    episodeDuration += episodeDuration * 0.20;
    let specialEpisodesTime = seasonsCount * 10;
    let totalTime = episodeDuration * episodesCount * seasonsCount + specialEpisodesTime;
    
    console.log(`Total time needed to watch the ${seriesName} series is ${Math.floor(totalTime)} minutes.`);
}