let bank = 0
let rustyScissorsItem = 0;
let oldMowerItem = 0;
let batteryPoweredMowerItem = 0;
let starvingStudentsItem = 0;

// This function adds money to the bank when a tool is used.
function addMoney (earnings){
    return bank = bank + earnings;   
}
//This function will subtract money when a user purchases a new "tool"
function subtractMoney(cost){ 
    if(cost <= bank){
      bank = bank - cost;  
      return true;
    }
    else{
        alert("You don't have enough money in the bank to make this purchase.")
    }
}
//this function will check to see if a user wins the game once they hit 1000 in the bank
function winsTheGame(){
    if(bank > 1000){
        alert("You win the game! Drinks on you!");
    }
}



//This function adds the value of the "tool" used to the bank
function teeth() {
    addMoney(1);
    // console.log("something")
    document.getElementById("moneyIHave").innerHTML=bank;
}
function rustyScissors(){
    if(rustyScissorsItem>=1){
        addMoney(5);
    } else {
        alert("you dont own any scissors")
    }
    winsTheGame();
    
    document.getElementById("moneyIHave").innerHTML=bank;
}
function oldMower(){
    if(oldMowerItem >=1){
        addMoney(50); 
    } else {
        alert("You dont own a Mower")
    }
    winsTheGame();
    
    document.getElementById("moneyIHave").innerHTML=bank;
}
function batteryPoweredMower(){
    if(batteryPoweredMowerItem >=1){
        addMoney(100);
    } else{
        alert("You dont own a battery powered mower.")
    }
    winsTheGame();
    
    document.getElementById("moneyIHave").innerHTML=bank;
}
function starvingStudents(){
    if(starvingStudentsItem >=1){
        addMoney(250);
    } else {
        alert("You don't have any students.")
    }
    winsTheGame();
    
    document.getElementById("moneyIHave").innerHTML=bank;
}

//event listeners for the USE buttons
//envokes functions above, associated with values
document.getElementById("teethUseButton").addEventListener("click", teeth);

document.getElementById("useRustyScissorsButton").addEventListener("click", rustyScissors);

document.getElementById("useOldMowerButton").addEventListener("click", oldMower);

document.getElementById("usePoweredMowerButton").addEventListener("click", batteryPoweredMower);

document.getElementById("useStarvingStudentsButton").addEventListener("click", starvingStudents);

//below are the BUY buttons
function buyRustyScissors(){
   subtractMoney(5)
   rustyScissorsItem +=1;
    document.getElementById("moneyIHave").innerHTML=bank;
}
function buyOldMower (){
    subtractMoney(25);
    oldMowerItem += 1;
    document.getElementById("moneyIHave").innerHTML=bank;
}
function buyBatteryPoweredMower(){
    subtractMoney(250);
    batteryPoweredMowerItem += 1;
    document.getElementById("moneyIHave").innerHTML=bank;
}
function buyStarvingStudents (){
    subtractMoney(500);
    starvingStudentsItem +=1;
    console.log("but Starving students")
    document.getElementById("moneyIHave").innerHTML=bank;
}
document.getElementById("buyRustyScissorsButton").addEventListener("click", buyRustyScissors);
document.getElementById("buyOldMowerButton").addEventListener("click", buyOldMower);
document.getElementById("buyPoweredMowerButton").addEventListener("click", buyBatteryPoweredMower);
document.getElementById("buyStarvingStudentsButton").addEventListener("click", buyStarvingStudents);