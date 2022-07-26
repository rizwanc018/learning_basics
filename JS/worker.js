let i = 1;
let j;
function timedCount() {
    j = i;
    i *= 5;
    if (i*5 == Infinity) {
        postMessage("Next is infinity : " + j);

    } else {
        postMessage(i);
    }
    setTimeout("timedCount()", 5);
}

timedCount();