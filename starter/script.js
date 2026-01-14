// // let hasDriversLicence = false;
// // const passTest = true;

// // if (passTest) hasDriversLicence = true;
// // if (hasDriversLicence) console.log('I can drive')

// // // console.log("My name is Khan and I am not a good boy!")

// // const interface = 'Audio';
// // const private = 534;

// function logger() {
//   console.log("My name is Akinolu!");
// }

// //calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// //Arguments (fruitProcessor(5, 0))
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const apppleOrangeJuice = fruitProcessor(2, 4);
// console.log(apppleOrangeJuice);

// const num = Number('23');
// console.log(num);

// function calcAge1(birthYear){
//   return  2037 - birthYear
// }

// const age1 = calcAge1(2003);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//   return 2037 = birthYear;
// }

// const age2 = calcAge2(11991);

// console.log(age1, age2);

// //Function Expression
// const calcAge2 = function (birthYear) {
//   return 2037 = birthYear;
// }

//Arrow functiion
// const calcAge3 =  birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} you retire in ${retirement} years, sadly.`;
// }

// console.log(yearsUntilRetirement(1991, 'Akinolu'));
// console.log(yearsUntilRetirement(1980, 'Nia'));

const cutFruitPieces = function (fruit) {
  return fruit * 4;
};

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
