"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

    function namePrompt() {
        var name = prompt("What's your name?")
        if(name === ""){ /*Could've created a prompt welcoming them in as a guest; this could've been accomplised with a do, while*/
            namePrompt();
        }
        else {
            alert("Welcome to the club " + name + "!");
        }
        return name;
    }

    // namePrompt();

// TODO: Show an alert message that welcomes the user based on their input.

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
    function likePizza() {
        var loveIt = confirm("Do you like pizza?")
        if (loveIt){
            alert("Rad! Me too!");
        }
        else{
            alert("I think you made a mistake back there")
            likePizza();
        }
    }

    // likePizza();

    // TODO: Bonus problem

    function registerUser() {
        var previouslyRegistered = confirm("Are you registered?")
        if (previouslyRegistered === false){
            var getRegistered = alert("Let's get you registered!")
        }

    }