(function () {
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    var names = ["Caesar", "Brutus", "Nero", "Augustus"];
    // TODO: Create a log statement that will log the number of elements in the names array.
    console.log(names.length);
    // TODO: Create log statements that will print each of the names array elements individually.
    for (var i = 0; i < names.length; ++i) {
        console.log(names[i]);
    }

    names.forEach(function (element, index, array) {
        console.log(element);
    })

    // Bonus problems

    var meal = ["Fries, fries, and more fries", "Metric ton of sandwiches", "Your body weight in pizza", "Scavenge the local area", "Lick an apple", "A single peanut", "Zero carb water", "Photosynthesize", "Tacos", "Burgers", "Fried frish", "Nothing, you didn't pack a lunch"];


    var whatMeal = Math.floor(Math.random() * 6) + 1;

    // Make a function that will take an array value, i++, and place it in a array, while a nested on takes the new generated number, and checks if it isn't already in the array'

})();
