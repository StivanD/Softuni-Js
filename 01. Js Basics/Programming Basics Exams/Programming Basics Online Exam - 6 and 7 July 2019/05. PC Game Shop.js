function pcGameShop(input){
    let soldGames = Number(input[0]);
    
    let hearthstone = 0;
    let fornite = 0;
    let overwatch = 0;
    let others = 0;
    
    for (let i = 1; i <= soldGames; i++) {
        let currentGame = input[i];
        
        switch (currentGame) {
            case "Hearthstone":
                hearthstone++;
                break;
            case "Fornite":
                fornite++;
                break;
            case "Overwatch":
                overwatch++;
                break;
            default:
                others++;
                break;
        }
    }
    
    hearthstone = hearthstone * 100 / soldGames;
    fornite = fornite * 100 / soldGames;
    overwatch = overwatch * 100 / soldGames;
    others = others * 100 / soldGames;
    
    console.log(`Hearthstone - ${hearthstone.toFixed(2)}%`);
    console.log(`Fornite - ${fornite.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatch.toFixed(2)}%`);
    console.log(`Others - ${others.toFixed(2)}%`);
}
