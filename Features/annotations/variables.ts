let apples: number = 5;
//colon and number are the annotation

let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
//value is same as type name

let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];
//indicates an array of strings

let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//Classes
class Car {}
let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); //{x: 10, y: 20}

// 2) When we declare a variable on one line and intialize it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean; // generally better to set this to false from the start
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}
