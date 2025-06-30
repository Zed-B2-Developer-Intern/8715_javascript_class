let sameValueArray = new Array(5).fill("hello");
console.log("1. Same value:", sameValueArray); 
let indexArray = Array.from({ length: 5 }, (_, i) => i);
console.log("2. Index values:", indexArray); 
let squaresArray = Array.from({ length: 5 }, (_, i) => i * i);
console.log("3. Squares:", squaresArray);
let manualArray = [];
for (let i = 1; i <= 5; i++) {
  manualArray.push(i);
}
console.log("4. Manual fill:", manualArray);
let mapFilledArray = new Array(5).fill().map((_, i) => i + 10);
console.log("5. Map filled:", mapFilledArray); 
let randomArray = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) + 1);
console.log("6. Random numbers:", randomArray);
let objectArray = Array.from({ length: 3 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}` }));
console.log("7. Objects:", objectArray);
let rows = 3, cols = 4;
let matrix = Array.from({ length: rows }, () => Array(cols).fill(0));
console.log("8. 2D Matrix:", matrix);
let alphabetArray = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
console.log("9. Alphabet A-Z:", alphabetArray);
let evenNumbers = Array.from({ length: 10 }, (_, i) => i).filter(num => num % 2 === 0);
console.log("10. Even numbers 0-9:", evenNumbers);
