/**
 * Created by mosesfranco on 4/10/17.
 */
// Strict mode
"use strict";

// Wal-mart exercise

// Define lucky number
var luckyNumber = Math.floor(Math.random()* 6);
var beforePromo = 60;
var afterPromo = null;

// For debugging
console.log(luckyNumber);

switch (luckyNumber){
    case 1:
        afterPromo = beforePromo * 0.90;
        console.log("You pay: $" + afterPromo.toFixed(2));
        break;
    case 2:
        afterPromo = beforePromo * 0.75;
        console.log("You pay: $" + afterPromo.toFixed(2));
        break;
    case 4:
        afterPromo = beforePromo * 0.50;
        console.log("You pay: $" + afterPromo.toFixed(2));
        break;
    case 5:
        console.log("You are getting your entire cart for free!");
        break;
    default:
        afterPromo = beforePromo;
        console.log("Sorry, you didn't win anything You pay: $" + afterPromo);
}

// Numerical month to string month exercise
var monthNumber = null;
var monthString = null;

monthNumber = Math.floor(Math.random()*12 +1);
console.log(monthNumber)

switch (monthNumber){
    case 1:
        monthString = "January";
        console.log(monthString);
        break;
    case 2:
        monthString = "February";
        console.log(monthString);
        break;
    case 3:
        monthString = "March";
        console.log(monthString);
        break;
    case 4:
        monthString = "April";
        console.log(monthString);
        break;
    case 5:
        monthString = "May";
        console.log(monthString);
        break;
    case 6:
        monthString = "June";
        console.log(monthString);
        break;
    case 7:
        monthString = "July";
        console.log(monthString);
        break;
    case 8:
        monthString = "August";
        console.log(monthString);
        break;
    case 9:
        monthString = "September";
        console.log(monthString);
        break;
    case 10:
        monthString = "October";
        console.log(monthString);
        break;
    case 11:
        monthString = "November";
        console.log(monthString);
        break;
    case 12:
        monthString = "December";
        console.log(monthString);
        break;
    default:
        console.log("Oops. That's not a month.")
}
