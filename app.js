var min = 0;
var sec = 0;
var msec = 0;

var minhtml = document.getElementById("mins");
var sechtml = document.getElementById("secs");
var msechtml = document.getElementById("msec");

var interval ;

function timer(){

    msec++;
    msechtml.innerHTML = msec;
if(msec >= 100){
    sec++;
    sechtml.innerHTML = sec;
    msec = 0;
}
else if (sec >= 60){
    min++;
    minhtml.innerHTML = min;
    sec = 0;
}
}

function start(){

interval  =   setInterval(timer , 10)
    
}
function stop(){
    clearInterval(interval)
}
function reset(){

    var min = 0;
    var sec = 0;
    var msec = 0;
    minhtml.innerHTML = min;
    sechtml.innerHTML = sec;

    msechtml.innerHTML = msec;
stop();
}

