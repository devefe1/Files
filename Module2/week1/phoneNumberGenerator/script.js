//create a variable with an array in it;
let numbers = [0,1,2,3,4,5,6,7,8,9];
// From the numbers variable I created , I will randomly pull numbers by creating a function;
//Use Math.floor(Math.random()) to generate numbers;

createAreaCode = function (element){
  return Math.floor(Math.random() * 10);
};

numbers.map(createAreaCode);



//console.log outputs area code
//Do i have to do this function multiple times or loop it to get the exact amount of numbers i need?
//Seperate function for the numbers after the area code

