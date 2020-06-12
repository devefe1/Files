let change = paid - cost;
let hundreddollars = 0, fiftydollars = 0, twentydollars = 0, tendollars = 0, fivedollars = 0,
dollar = 0, quarter = 0, dime = 0, nickel = 0, penny = 0;

while (change >= 100){
hundreddollars ++;
change -= 100;
}
while(change >= 50){
fiftydollars ++;
change -= 50;
}
while (change >= 20){
twentydollars ++;
change -=20;
}
while (change >= 10){
tendollars ++;
change -= 10;
}
while (change >= 5){
fivedollars ++;
change -=5;
}
while (change >= 1){
dollar ++;
change -= 1;
}
while (change >= 0.25){
quarter ++;
change -= 0.25;
}
while (change >= 0.10){
dime ++;
change -= 0.10;
}
while (change >= 0.05){
nickel++;
change -= 0.05;
}
while (change >= 0.01){
penny++;
change -= 0.01;
}

console.log("Your largest denomination of change is: ", hundreddollars, "$100 bills, ", "\n" ,
fiftydollars, "$50 bills, ", "\n" , twentydollars, "$20 bills, ", "\n" ,tendollars, "$10 bills, ", "\n" ,
fivedollars, "$5 bills, ", "\n" , dollar, "$1 bills, ", "\n" , quarter, "quarters, ", "\n" , dime, "dimes, ",
"\n" , nickel, "nickels, and ", "\n" , penny, "pennies.");
}

largeDenom(27.83,100);