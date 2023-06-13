function gladiadorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let brokenShield = 0;
    
    for (let i = 1; i <= lostFights; i++) {
        
        if (i % 2 === 0 && i % 3 === 0) {
            expenses += shieldPrice;
            brokenShield++;
        }
        if (i % 2 === 0) {
            expenses += helmetPrice;
        }
        if (i % 3 === 0) {
            expenses += swordPrice
        }
        
        if (brokenShield === 2) {
            expenses += armorPrice;
            brokenShield = 0;
        }   
    }
    
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
