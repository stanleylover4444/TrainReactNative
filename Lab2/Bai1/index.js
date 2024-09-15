
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

function compareBMIs(markMass, markHeight, johnMass, johnHeight) {
    const markBMI = calculateBMI(markMass, markHeight);
    const johnBMI = calculateBMI(johnMass, johnHeight);
    const markHigherBMI = markBMI > johnBMI;

    return {
        markBMI,
        johnBMI,
        markHigherBMI
    };
}


const result1 = compareBMIs(markMass1, markHeight1, johnMass1, johnHeight1);
console.log('Test Data 1:');
console.log(`Mark's BMI: ${result1.markBMI.toFixed(2)}`);
console.log(`John's BMI: ${result1.johnBMI.toFixed(2)}`);
console.log(`Mark has a higher BMI than John: ${result1.markHigherBMI}`);

const result2 = compareBMIs(markMass2, markHeight2, johnMass2, johnHeight2);
console.log('\nTest Data 2:');
console.log(`Mark's BMI: ${result2.markBMI.toFixed(2)}`);
console.log(`John's BMI: ${result2.johnBMI.toFixed(2)}`);
console.log(`Mark has a higher BMI than John: ${result2.markHigherBMI}`);
