let audio = new Audio();
audio.muted = false;
audio.autoplay = true;
audio = document.getElementById('default-sound');
function play(audioId) {
    if (audio != null) {
        audio.pause();
    }
    audio = document.getElementById(audioId);
    audio.play();
}