const controlIcon = document.getElementById("controlIcon");
const progressBar = document.getElementById("progressBar");
const song = document.getElementById("song");
const imgBox = document.querySelector(".imgBox");

song.onloadedmetadata = function () {
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;
};
function playPause() {
    if (controlIcon.classList.contains("fa-play")) {
        song.play();
        setInterval(() => {
            progressBar.value = song.currentTime;
        }, 500);
        controlIcon.classList.remove("fa-play");
        controlIcon.classList.add("fa-pause");
        imgBox.classList.add("rotate");
    } else {
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
        imgBox.classList.remove("rotate");
    }
}
progressBar.onchange = function () {
    song.currentTime = progressBar.value;
    song.play();
    controlIcon.classList.remove("fa-play");
    controlIcon.classList.add("fa-pause");
};
