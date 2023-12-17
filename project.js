// PROJECT LOGIC

// 1. Deposit some money
// 2. Determine num of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine 
// 5. Check if user win 
// 6. Give user their winning / tell about lose 
// 7. Play againt or user have no money

const prompt = require("prompt-sync")();
const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 9,
}

const SYMBOL_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
}

// 1. Deposit some money
const deposit = () => {
    while(true) {

        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
         console.log("Invalid deposit amount, try again.");
        } else {
            return numberDepositAmount;
        }
    }

}

// 2. Determine num of lines to bet on
const getNumberOfLines = () => {
    while(true) {

        const lines = prompt("Enter a number of lines you wanna bet on(1-3): ");
        const numberOfLines = parseFloat(lines);

        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
         console.log("Invalid lines amount, try again.");
        } else {
            return numberOfLines;
        }
    }
}
let balance = deposit();   

// 3. Collect a bet amount
const getBet = (balance, lines) => {
    while(true) {

        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);

        if(isNaN(numberBet) || numberBet <= 0 || numberBet > (balance / lines)) {
         console.log("Invalid bet, try again.");
        } else {
            return numberBet;
        }
    }

}

// 4. Spin the slot machine 
const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            sympols.push(symbol);
        }
    }

    const reels = [[], [], []];
    for (let i = 0; i < COLS; i++) {
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex,1);
        }
    }
    return reels;
}

const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);

