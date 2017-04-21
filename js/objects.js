(function () {
    "use strict";

    /**
     * TODO:
     * Create person object, store it in a variable named person
     */
    var person = new Object();
    /**
     * TODO:
     * Create firstName and lastName properties in your person object, and
     * assign your name to them
     */
    person.firstName = "Moses";
    person.lastName = "Franco";
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * person.sayHello() // returns "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        return "Hello from " + this.firstName + " " + this.lastName + "!";
        /*Updated to reflect the idea that .this will work as an alias, and a return*/
    };
    console.log(person.sayHello());
    /** TODO: Remember this problem from before?
     *
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much does Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var discountRate = prompt("Set discount amount: X.XX%")

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function (shopper) {
        if (shopper.amount > 200) {
            console.log(shopper.name + " you owe: $" + shopper.amount + ", but got a discount of: " + discountRate + "%. You now owe: $" + (shopper.amount * (1 - discountRate)) + ".");
        }
        else {
            console.log(shopper.name + " you owe: $" + shopper.amount + ".");
        }
    })

})();

(function () {
    "use strict";

//
// Create an array of objects that represent books.
// Each book should have a title and an author property.
// The author property should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array
// var books =

    var books = [
        {
            title: "Green Gardens",
            author: {
                firstName: "Johnathan",
                lastName: "Appleseed"
            }
        },
        {
            title: "Forensics & Criminology 101",
            author: {
                firstName: "Jack",
                lastName: "Ripper"
            }
        },
        {
            title: "World History",
            author: {
                firstName: "Mars",
                lastName: "Victors"
            }
        },
        {
            title: "Better Sleep: the definitive guide to falling asleep faster",
            author: {
                firstName: "Sandra",
                lastName: "Mann"
            }
        },
        {
            title: "Lorem ipsum: quid dicis amicus?",
            author: {
                firstName: "Brutus",
                lastName: "Non-Nulli"
            }
        }
    ];

// log out the books array
    console.log(books);


// Loop through the array of books using .forEach and print out the specified information about each one.
// start loop here
    books.forEach(function (books, i) {
        console.log("Book #" + (i+1));
        console.log("Title: " + books.title);
        console.log("Author: " + books.author.firstName + " " + books.author.lastName);
        console.log("---");
    })
// end loop here
})();

(function () {
    "use strict";

    var pet =
        {
            name: "Brownie",
            species: "Chihuahua",
            age: 7,
            gender: "female",
            clean: false,
            hungry: false,
            sleepy: true,
            happy: true,
            petFood: 10,
            soap: 3
        };

    pet.callPet = function () { /*call’s out pet name*/
        alert(pet.name + "!");
    };

    pet.playWithPet = function () { /*makes pet happy and hungry and dirty*/
        pet.happy = true;
        pet.hungry = true;
        pet.clean = false;
    };

    pet.feedPet = function (petFood) { /*makes pet not hungry and sleepy and reduces petFood by 1*/
        pet.hungry = false;
        pet.sleepy = true;
        pet.petFood = -1;
    };

    pet.makePetSleep = function () { /*makes pet not sleepy, not happy, and hungry, and 1 older*/

    };

    pet.cleanPet = function (soap) { /*makes pet not happy and clean and reduces soap by 1*/

    };
})();