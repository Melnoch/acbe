let id = 0;
function shuffleId(baId) {
    if (id != null && id !== 0) {
        console.log("Précédente lettre n°" + id)
        let elementLetter = document.getElementById('letter-' + id);
        if (elementLetter != null) {
            elementLetter.classList.add('hide');
        }
        let elementTajwid = document.getElementById('tajwid-' + id)
        if (elementTajwid != null) {
            elementTajwid.classList.add('hide');
        }
    }
    id = baId;
    console.log("Prochaine lettre n°" + baId)
    document.getElementById('letter-' + baId).classList.remove('hide');
}
function shuffle() {
    if (id != null && id !== 0) {
        console.log("Précédente lettre n°" + id)
        let elementLetter = document.getElementById('letter-' + id);
        if (elementLetter != null) {
            elementLetter.classList.add('hide');
        }
        let elementTajwid = document.getElementById('tajwid-' + id)
        if (elementTajwid != null) {
            elementTajwid.classList.add('hide');
        }
    }
    id = Math.floor(Math.random() * 28) + 1;
    console.log("Prochaine lettre n°" + id)
    document.getElementById('letter-' + id).classList.remove('hide');
}
function displayTajwid() {
    document.getElementById('tajwid-' + id).classList.remove('hide');
}