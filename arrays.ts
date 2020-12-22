const carMakers = ['ford', 'toyota', 'chevy'];

// add explicit typing when assigning variable to an empty array

const dates = [new Date(), new Date();

//string[][]
const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

//Benefit: Help w/inference when extracting values
const car1 = carMakers[0];
const myCar =carMakers.pop();

// Benefit: prevent incompatible values
carMakers.push(100);

//Benefit: help with 'map' and other array methods like auto complete
carMakers.map((car: string): string => {
  return car; 
})

//Flexible types (string | Date)[]
const importantDates = [new Date(), '2020-12-23']; 