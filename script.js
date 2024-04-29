let num1 = 5;
let num2 = 10;
console.log(num1 + num2);

let a = '12';
let b = Number(a);
console.log(b);

let randomNumber = Math.floor(Math.random() * 100); 
let type = randomNumber % 2 === 0 ? 'even' : 'odd';
console.log(`The number ${randomNumber} is ${type}.`);


let inputWord = prompt("Enter a word:");
let output = inputWord.toLowerCase() === 'mars' ? 'mars' : 'Mars It school';
console.log(output);


let words = ["Яблоко", "Банан", "вишня", "киви", "манго"];
let longWords = [];

for (let word of words) {
    if (word.length >= 5) {
        longWords.push(word);
    }
}

console.log(longWords); 


for (let i = 1; i <= 100; i++) {
    let type = i % 2 === 0 ? 'even' : 'odd';
    console.log(`The number ${i} is ${type}.`);
}








