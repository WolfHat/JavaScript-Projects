function classFunction() {
    var A = document.getElementsByClassName("Class");
    document.getElementsByClassName("Result").innerHTML = A;
    var result = A[0].innerHTML + " " + A[1].innerHTML;
    document.getElementById("Result").innerHTML = result;
}

var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 480, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(10, 10, 480, 230);

ctx.font = "100px Verdana";
ctx.strokeStyle = "green";
ctx.strokeText("HELLO!", 75, 150);