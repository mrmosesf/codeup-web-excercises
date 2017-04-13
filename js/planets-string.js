(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    // TODO: Convert planetsString to an array, save it to planetsArray.
    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    var brTags = planetsArray.join("<br>");
    console.log(brTags);
    // Why might this be useful?
    // Feeling lazy? It's a quick way to make some code'

    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
    var unorderedPlanets = planetsString.split('|');
    console.log("<ul>\n")
    for(var i = 0; i < unorderedPlanets.length; i++){
        console.log("\t<li>" + unorderedPlanets[i] + "</li>");
    }
    console.log("</ul>")


    // Meridian to 24hr and back problem

    // Takes in a time/text in XX:xx time format
    var mTo24 = prompt("What time is it?");

    var twentyFourHolder = mTo24.split(":");
    console.log(twentyFourHolder);
    var nearlyMeridian = null;
    if(twentyFourHolder[0] > 13){
        nearlyMeridian = (parseInt(twentyFourHolder[0])-12) + ":" + twentyFourHolder[1] + "pm";
    }
    else {
        nearlyMeridian = twentyFourHolder[0] + ":" + twentyFourHolder[1] + "am";
    }
    console.log(nearlyMeridian);



})();
