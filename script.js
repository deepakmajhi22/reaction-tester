var start = new Date().getTime();
var arr = new Array();
var i = 0;
function generateRandomColor() {
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`
}

function move() {

    var left;
    var top;
    var wh;
    left = Math.random() * 300;
    top = Math.random() * 300;
    wh = ((Math.random() * 400) + 100);

    document.getElementById('shape').style.top = top + "px";

    document.getElementById('shape').style.margin = left + "px";

    document.getElementById('shape').style.width = wh + "px";

    document.getElementById('shape').style.height = wh + "px";

    document.getElementById('shape').style.display = "block";

    document.getElementById("shape").style.backgroundColor = generateRandomColor();

    start = new Date().getTime();
}





document.getElementById("shape").onclick = function () {
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();
    var timetaken = (end - start) / 1000;

    alert(timetaken);
    arr[i] = timetaken;
    i++;

    move();




}






