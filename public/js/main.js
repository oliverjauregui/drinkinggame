let h3 = document.getElementById("shown-sentence");
let btn = document.getElementById("change");
let timer = document.getElementById("watch-numbers");
let watchIcon = document.getElementById("watch-icon");
let seconds = 10;

function randomize(min, max) {
    let mathlogic = Math.floor((Math.random() * (max - min + 1)) + min);
    return h3.innerHTML = promts[mathlogic];
};

btn.addEventListener("click", function(){
    randomize(0,(promts.length) - 1);
});

function refreshTime() {
    timer.innerHTML = seconds + " SEG.";
    if(seconds==0) {
        timer.innerHTML = "¡CHUPAA!";
        // watchIcon.style.opacity = "0";
    }else{
        seconds--;
        setTimeout("refreshTime()", 1000);
    }
};
refreshTime();

btn.addEventListener("click", function(){
    if(seconds==0) {
        seconds = 10;
        // watchIcon.style.opacity = "1";
        refreshTime();
    }else{
        seconds = 10;
    }
});



/* console.log(promts[0]);

h3.innerHTML = promts[1]; */
 