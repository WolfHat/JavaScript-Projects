function test() {
    //adds two pieces together to make "Surprise"
    var newButton = "Surp";
    newButton += "rise!";
    //Makes it green
    var result = newButton.fontcolor("green");
    //initates another variable
    var surprise = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    //changes the button text
    document.getElementById("Button").innerHTML = result;
    //changes the paragraph text
    document.getElementById("text").innerHTML = surprise;
}