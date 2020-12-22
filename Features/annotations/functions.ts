const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// Void means nothing is returned from this function, tho technically it can return null or undefined
const logger = (message: string): void => {
  console.log(message);
};

// Only use it when you expect a function to never return anything ever. Never ever.
const throwError = (message: string): never => {
  throw new Error(message);
};
