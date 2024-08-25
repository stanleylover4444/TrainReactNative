
const markMass1 = 78; 
const markHeight1 = 1.69; 
const johnMass1 = 92; 
const johnHeight1 = 1.95; 

const markMass2 = 95; 
const markHeight2 = 1.88; 
const johnMass2 = 85; 
const johnHeight2 = 1.76; 


function calculateBMI(mass, height) {
    return mass / (height * height);
}


function compareAndPrintBMIs(markMass, markHeight, johnMass, johnHeight) {
    const markBMI = calculateBMI(markMass, markHeight);
    const johnBMI = calculateBMI(johnMass, johnHeight);
    const markHigherBMI = markBMI > johnBMI;

    if (markHigherBMI) {
        console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than John's (${johnBMI.toFixed(2)})!`);
    } else {
        console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's (${markBMI.toFixed(2)})!`);
    }
}


console.log('Test Data 1:');
compareAndPrintBMIs(markMass1, markHeight1, johnMass1, johnHeight1);


console.log('\nTest Data 2:');
compareAndPrintBMIs(markMass2, markHeight2, johnMass2, johnHeight2);
