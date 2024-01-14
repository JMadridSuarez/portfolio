

function ClockPerm(){
    const time = new Date();
    let hr = time.getHours();
    let mn = time.getMinutes();
    let sec = time.getSeconds();
    setTimeout(function(){ ClockPerm() }, 1000);
    let clock = document.getElementById("clock").innerHTML = hr + " : " + mn + " : " + sec;
    clock.className = "dateNew";
}

ClockPerm();


