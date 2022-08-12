function Call_Loop() {
    var blueCount = 0;
    while(blueCount < 2) {
        document.getElementById("Loop").innerHTML += "I'm blue<br>";
        for(daBaDeeCount = 0; daBaDeeCount < 7; daBaDeeCount++) {
            document.getElementById("Loop").innerHTML += "Da ba dee da ba di<br>";
        }
        daBaDeeCount = 0;
        blueCount++;
    }
}

function array_Function() {
    var dogNames = ["Spot","Rufus","Fluffy"];
    document.getElementById("Array").innerHTML = "You could name your dog " + dogNames[2];
}

const Lhyrine = {class:"Druid", subclass:"Moon"}
function constant_function() {
    Lhyrine.subclass = "Land";
    Lhyrine.pet = "Wolf";
    Lhyrine = "A moon druid";
    document.getElementById("Constant").innerHTML = Lhyrine;
}