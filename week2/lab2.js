//exercise 1

const gretter = (myArray, counter) => {
  const greetText = "Hello";

  for (let item of myArray) {
    console.log(`${greetText} ${item}`);
  }
};

gretter(["Randy Savage", "Ric Flair", "Hulk Hogan"], 3);


//exercise 2

const string = "fooBar";

const [fch, ...rest] = string;

const capitalize = (w) => {
  const [first, ...rest] = w;
  console.log(`dsfgdf ${first}`);
  return first.toUpperCase() + rest.join("");
};

//exercise 3

const colors = ["red", "green", "blue"];

const captilizedColors = colors.map(
  (color) => color[0].toUpperCase() + color.slice(1),
);

//exercise 4

var values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = values.filter((value) => value < 20);

//exercise 5

var array = [1, 2, 3, 4];

const initialValue = 0;

const calculateSum = array.reduce(
  (accumulater, curentvalue) => accumulater + curentvalue,
  0,
);

const calculateProduct = array.reduce(
  (accumulater, current) => accumulater * current,
  1,
);

//exercise 6
















console.log(captilizedColors);
console.log(capitalize("fooBar"));
console.log(capitalize("nodeJs"));
console.log(filterLessThan20);
console.log(calculateSum);
console.log(calculateProduct);
