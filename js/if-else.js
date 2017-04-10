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
var person1 = "Ryan";
var person1Pays = 250.00;

var person2 = "Cameron";
var person2Pays= 180.00;

var person3 = "George";
var person3Pays = 320.00;

var discountRate = 1 - 0.35;

var discountBreakpoint = 200.00

// In the future, should assign a variable, and then treat the conditonal like a function, i.e. seperate customer variable, their pay ammount, set each time before the if. No need for an else.

if(person1Pays > discountBreakpoint){
    var person1Discount = person1Pays * discountRate;
    console.log(person1 + " bought $" + person1Pays.toFixed(2) + " worth of products. Final payment: $" + person1Discount.toFixed(2));
}
else{
    console.log(person1 + " bought $" + person1Pays.toFixed(2) + " worth of products. Final payment: $" + person1Pays.toFixed(2));
}

if(person2Pays > discountBreakpoint){
    var person2Discount = person2Pays * discountRate;
    console.log(person2 + " bought $" + person2Pays.toFixed(2) + " worth of products. Final payment: $" + person2Discount.toFixed(2));
}
else{
    console.log(person2 + " bought $" + person2Pays.toFixed(2) + " worth of products. Final payment: $" + person2Pays.toFixed(2));
}

if(person3Pays > discountBreakpoint){
    var person3Discount = person3Pays * discountRate;
    console.log(person3 + " bought $" + person3Pays.toFixed(2) + " worth of products. Final payment: $" + person3Discount.toFixed(2));
}
else{
    console.log(person3 + " bought $" + person3Pays.toFixed(2) + " worth of products. Final payment: $" + person3Pays.toFixed(2));
}

// Buy a car or house
var flipACoin = Math.floor(Math.random()* 2);

if (flipACoin){
    console.log("Buy a house!");
}
else{
    console.log("Buy a car!");
}

/*
Car/house ternary example
var flipACoin = Math.floor(Math.random()*2;
var choice = (flipACoin) ? "Buy a car!": "Buy a house";
console.log(choice);*/
