/**
 * Created by mosesfranco on 4/10/17.
 */
// Strict mode
"use strict";


// Grade calc
var gradeAverage = (70 + 80 + 95)/3;

if(gradeAverage > 80){
    console.log("You're awesome");
}
else{
    console.log("You need more practice")
}

// HEB discount
var ryan = "Ryan";
var ryanPays = 250.00;

var cameron = "Cameron";
var cameronPays= 180.00;

var george = "George";
var georgePays = 320.00;

if(ryanPays > 200.00){
    var ryanDiscount = ryanPays * 0.65;
    console.log(ryan + " bought $" + ryanPays.toFixed(2) + " worth of products. Final payment: $" + ryanDiscount.toFixed(2));
}
else{
    console.log(ryan + " bought $" + ryanPays.toFixed(2) + " worth of products. Final payment: $" + ryanPays.toFixed(2));
}

if(cameronPays > 200.00){
    var cameronDiscount = cameronPays * 0.65;
    console.log(cameron + " bought $" + cameronPays.toFixed(2) + " worth of products. Final payment: $" + cameronDiscount.toFixed(2));
}
else{
    console.log(cameron + " bought $" + cameronPays.toFixed(2) + " worth of products. Final payment: $" + cameronPays.toFixed(2));
}

if(georgePays > 200.00){
    var georgeDiscount = georgePays * 0.65;
    console.log(george + " bought $" + georgePays.toFixed(2) + " worth of products. Final payment: $" + georgeDiscount.toFixed(2));
}
else{
    console.log(george + " bought $" + georgePays.toFixed(2) + " worth of products. Final payment: $" + georgePays.toFixed(2));
}

// Buy a car or house
var flipACoin = Math.floor(Math.random()* 2);

if (flipACoin === 0){
    console.log("Buy a car!");
}
else{
    console.log("Buy a house!");
}

/*
Car/house ternary example
var flipACoin = Math.floor(Math.random()*2;
var flipACoin = 0 ? "Buy a car!": "Buy a house";*/
