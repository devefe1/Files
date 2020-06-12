// let dishes = [
//     // give the dishes below a price
//      {name:"mac & cheese", price: 5},
//      {name:"salad"}
//    ];
// for (let i in dishes) {
//     let dish = dishes[i];
//    console.log(`${dish.name} costs: ${dish.price}`);
//      if (dishes.name === undefined) {
//          dish.price = 8;
       
//     }
// }

// console.log(dishes)

// let spaceship = {
//     location: "Moon",
//     // a function on a object is called a method
//     launch: function() {
//       //`this` works within the scope its in
//       this.location = "Outer space"; // re-assignning location property
//     },

//     flyTo: function(to) {
//         this.location = to;
//         console.log(this.location);

//     }
   
//   }
  
// //   console.log("Your location: " + spaceship.location); // => returns earth

//   spaceship.launch();
//   console.log("Your location: " + spaceship.location);

//   exercise for spaceship object:
// Create a property named flyTo and assign it a function
// change the location based on parameter

let robot = {
    name:"",
    x: 0,
    y: 0,
    
    move: function(steps, direction){
        this.x = steps;
        this.y = direction;
        this.location();
    },
    location: function()
    {
        console.log("### Robot coordinates ###");
        console.log("x:", this.x, "y:", this.y);
    }
 }
 robot.move(2,"forward"); //Which axis is "forward"?
 robot.location();