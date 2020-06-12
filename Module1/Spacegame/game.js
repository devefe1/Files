// let countShip = 0;
// let USShip ={
//     hull : 20,
//     firepower: 5,
//     accuracy: .7
// }

// class Space {
//     constructor() {
//     this.hull = Math.floor(Math.random() * 3) + 3.5;
//     this.firepower = Math.floor(Math.random() * (4-2) + 2.5);
//     this.accuracy = Math.random();
//     };
// }

// let opps = [opps1, opps2, opps3, opps4, oops5, opps6];

// const opps1 = new AlienShip ();
// const opps2 = new AlienShip ();
// const opps3 = new AlienShip ();
// const opps4 = new AlienShip ();
// const opps5 = new AlienShip ();
// const opps6 = new AlienShip ();


var Me = {
    top: 700,
    left: 700
};
document.onkeydown = function(move){
if(move.keyCode === 37){
console.log("left");
Me.left = Me.left - 5;
moveMe()
}else if(move.keyCode === 39){
console.log("right");
Me.left = Me.left + 5;
moveMe()
}else if(move.keyCode === 38){
console.log("up");
Me.top = Me.top + 5;
moveMeUpDown()
}else if(move.keyCode === 40){
console.log("down");
Me.top = Me.top - 5;
moveMeUpDown()
}else if(move.keyCode === 32){
console.log("shoot");
bullet.push({
    top: Me.top - 10,
    left: Me.left +10,
})
//console.log(bullet); to check the movement of our bullet relative to the keyCode in the chrome console.
drawBullets()
}
}

//This function will let code 26 execute. i.e actually move the actor.
function moveMe(){
document.getElementById("Me").style.left = Me.left + "px";
}
function moveMeUpDown(){
document.getElementById("Me").style.top = Me.top + "px";
}