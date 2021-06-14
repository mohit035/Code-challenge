const heightMark = 1.69;
const weightMark = 78;
const BMIMark=weightMark/(heightMark**2);
console.log(BMIMark);

const heightJohn = 1.88;
const weightJohn = 95;
const BMIJohn=weightJohn/(heightJohn**2);
console.log(BMIJohn);

markHigherBMI=BMIMark>BMIJohn;
console.log(markHigherBMI);