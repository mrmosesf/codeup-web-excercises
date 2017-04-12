"use strict";
//  // TODO: Fill in your name here.


/**
 * TODO:s
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 *  > sayHello("codeup") // returns "Hello, codeup!"
 */
// Which turns out to also be as easy as just putting everything into a new function that runs immediately

(function sayHello() {
    var myNameIs = prompt("What's your name?");
    return "Hello " + myNameIs;
})();


/**
 * TODO:
 * Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
 * Store the result of the function call in a variable named 'helloMessage'.
 * console.log 'helloMessage' to check your work
 */

// var helloMessage = sayHello(myNameIs);
// console.log(helloMessage);


// Don't modify the following line, it generates a random number between 1 and
// 100 and stores it in a variable named random


/**
 * TODO:
 * Create a function called 'isOdd' that takes a number as a parameter.
 * The function should use the ternary operator to return a message.
 * The message should contain the number being checked, and whether or not the
 * number is odd
 *
 * Example
 *  > isOdd(42) // returns "42 is not odd!"
 */

(function isOdd() {
    var random = Math.floor((Math.random() * 100) + 1);
    var message = (random % 2 === 1) ? random + " is odd" : random + " is not odd"
    console.log(message);
})();

/**
 * TODO:
 * Call the function 'isOdd' passing the variable 'random' as a parameter.
 * console.log *outside of the function* to check your work
 */

// console.log(isOdd(random));

// Extra challenges

(function randomMinMax() {
    var max = prompt("Enter a max");
    var min = prompt("Enter a min")
    var rando = Math.floor(Math.random() * (max - min) + min);
    console.log(rando);
})();

(function dateChanger() {
    var dateNumbers = prompt("Enter a date in DD/MM/YY")
    var month = dateNumbers.substring(0, 2);
    var day = dateNumbers.substring(3, 5);
    var year = dateNumbers.substring(6, 8);

    var monthString = "";
    var dayString = day;
    var yearString = "";

    switch (month) {
        case "01":
            monthString = "January";
            break;
        case "02":
            monthString = "February";
            break;
        case "03":
            monthString = "March";
            break;
        case "04":
            monthString = "April";
            break;
        case "05":
            monthString = "May";
            break;
        case "06":
            monthString = "June";
            break;
        case "07":
            monthString = "July";
            break;
        case "08":
            monthString = "August";
            break;
        case "09":
            monthString = "September";
            break;
        case "10":
            monthString = "October";
            break;
        case "11":
            monthString = "November";
            break;
        case "12":
            monthString = "December";
            break;
    }
    if ((parseInt(year)) > 17) {
        yearString = "19" + year;
    }
    else {
        yearString = "20" + year;
    }
    console.log(monthString + " " + dayString + " " + yearString);
})();