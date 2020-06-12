// you cannot associate dish with price using an array
// an array of objects || an obj of obj's
let menu = [
 // the property name must match!
 // good syntax:
   // commas to separate each object and key:value pairs
   // no comma on the last one
 {protein: 'chicken', price: 5},
 {protein: 'steak', price: 8},
 {protein: 'fish', price: 10}
];

for (let index in menu) {
  var plate = menu[index]; //passing the entire object into the plate variable

  console.log(`${plate.protein} cost ${plate.price} dollars`)
}
