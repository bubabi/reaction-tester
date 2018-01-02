var start = new Date().getTime();

function getRandomColor() {

    var letters = '0123456789ABCDEF'.split('');

    var color = '#';

    for (var i = 0; i < 6; i++ ) {

        color += letters[Math.floor(Math.random() * 16)];

    }

    return color;

}

function makeShapeAppear(){

    var top = Math.random() * 300;
    var left= Math.random() * 1600;

    var width = (Math.random() * 200) + 100;
    console.log(left);

    document.getElementById("shape").style.backgroundColor = getRandomColor();
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = width + "px";
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    if(Math.floor(Math.random()*2)==0) {
        document.getElementById("shape").style.borderRadius = "100px";
    }
    else {
        document.getElementById("shape").style.borderRadius = "1em";
    }
    document.getElementById("shape").style.display = "block";

    start = new Date().getTime();

}

function appearAfterDelay() {

    setTimeout(makeShapeAppear, Math.random() * 2000);

}

appearAfterDelay();

var timesArray = new Array();

document.getElementById("shape").onclick = function() {

    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();

    var timeTaken = (end - start) / 1000;
    timesArray.push(timeTaken);
    var avgTime = 0;
    for (var i = 0; i < timesArray.length; i++) {
        avgTime += timesArray[i];
    }
    avgTime /= timesArray.length;
    avgTime=avgTime.toFixed(3);
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
    document.getElementById("avgTime").innerHTML="Average time: "+avgTime+"s";
    appearAfterDelay();
}
