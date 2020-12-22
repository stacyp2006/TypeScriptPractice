const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

//tuple template
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 40];

//tuple type annotation
const pepsi: [string, boolean, number] = ['brown', true, 40];
