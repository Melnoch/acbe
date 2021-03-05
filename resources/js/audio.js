var audio;
function play(audioId) {
    if (audio != null) {
        audio.pause();
    };
    audio = document.getElementById(audioId);
    audio.play();
}