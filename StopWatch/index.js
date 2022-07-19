const stopwatch = document.getElementById("time");

const playbtn = document.getElementById("playbtn");
const pausebtn = document.getElementById("pausebtn");
const resetbtn = document.getElementById("resetbtn");

// playbtn.addEventListener('click', startStopwatch);
// pausebtn.addEventListener('click', stopStopwatch);
// resetbtn.addEventListener('click',resetStopwatch);

let startTime;
let elapsedTime = 0;
let StopWatchInterval;

const updateTime = (elapsedTime) =>{
    let hh = elapsedTime / 3600000;
    let hrs = Math.floor(hh);

    let mm = (hh-hrs) * 60;
    let mins = Math.floor(mm);

    let ss = (mm-mins)*60;
    let secs = Math.floor(ss);

    let ms = (ss-secs)*1000;
    let milisec = Math.floor(ms);

    stopwatch.innerText = `${hrs.toString()}:${mins.toString()}:${secs.toString()}:${milisec.toString()}`;
};

const startStopwatch = () => {
    startTime = Date.now() - elapsedTime;
    playbtn.style.display = "none";
    pausebtn.style.display = "block";

    StopWatchInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;

     updateTime(elapsedTime);
    }, 1);
};

const stopStopwatch = () => {
    clearInterval(StopWatchInterval);
    playbtn.style.display = "block";
    pausebtn.style.display = "none";
};

const resetStopwatch = () =>{
    clearInterval(StopWatchInterval);
    stopwatch.innerText = "00:00:00:000";
    elapsedTime = 0;
};

playbtn.addEventListener("click", startStopwatch);
pausebtn.addEventListener("click", stopStopwatch);
resetbtn.addEventListener("click", resetStopwatch);