// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log('I can drive')

// // console.log("My name is Khan and I am not a good boy!")

// const interface = 'Audio';
// const private = 534;

function logger() {
  console.log("My name is Jonas");
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

//Arguments (fruitProcessor(5, 0))
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const apppleOrangeJuice = fruitProcessor(2, 4);
console.log(apppleOrangeJuice);

const num = Number('23');
console.log(num);
