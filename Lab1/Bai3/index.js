
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];


const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];


const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];

function calculateAverage(scores) {
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}


function determineWinner(dolphinsScores, koalasScores) {
    const dolphinsAvg = calculateAverage(dolphinsScores);
    const koalasAvg = calculateAverage(koalasScores);

 
    console.log(`Dolphins' average score: ${dolphinsAvg.toFixed(2)}`);
    console.log(`Koalas' average score: ${koalasAvg.toFixed(2)}`);

  
    if (dolphinsAvg >= 100 && koalasAvg >= 100) {
        if (dolphinsAvg > koalasAvg) {
            console.log(`Dolphins win with an average score of ${dolphinsAvg.toFixed(2)}!`);
        } else if (koalasAvg > dolphinsAvg) {
            console.log(`Koalas win with an average score of ${koalasAvg.toFixed(2)}!`);
        } else {
            console.log(`It's a draw! Both teams have an average score of ${dolphinsAvg.toFixed(2)}.`);
        }
    } else if (dolphinsAvg >= 100 && dolphinsAvg > koalasAvg) {
        console.log(`Dolphins win with an average score of ${dolphinsAvg.toFixed(2)}!`);
    } else if (koalasAvg >= 100 && koalasAvg > dolphinsAvg) {
        console.log(`Koalas win with an average score of ${koalasAvg.toFixed(2)}!`);
    } else {
        console.log(`No team wins the trophy.`);
    }
}


console.log('Test Data 1:');
determineWinner(dolphinsScores1, koalasScores1);


console.log('\nData Bonus 1:');
determineWinner(dolphinsScoresBonus1, koalasScoresBonus1);


console.log('\nData Bonus 2:');
determineWinner(dolphinsScoresBonus2, koalasScoresBonus2);
