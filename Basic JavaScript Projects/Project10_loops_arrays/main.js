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