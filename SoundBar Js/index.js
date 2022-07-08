const btn=document.querySelectorAll(".btn");

const stopSounds = () => {
    btn.forEach((button) => {
            const audio = document.getElementById(button.innerText);
            audio.pause();
            audio.currentTime = 0;
        }); 
};


btn.forEach((button) => {
        button.addEventListener("click", () => {
            stopSounds();
            document.getElementById(button.innerText).play();
        });
});
