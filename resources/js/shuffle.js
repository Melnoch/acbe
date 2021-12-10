let id = 0;
function shuffle() {
    if (id != null && id !== 0) {
        console.log("Précédente lettre n°" + id)
        let elementLetter = document.getElementById('letter-' + id);
        if (elementLetter != null) {
            elementLetter.classList.add('hide');
        }
        let elementTajwid = document.getElementById('tajwid')
        if (elementTajwid != null) {
            elementTajwid.classList.add('hide');
        }
    }
    id = Math.floor(Math.random() * 28) + 1;
    console.log("Prochaine lettre n°" + id)
    document.getElementById('letter-' + id).classList.remove('hide');
}
function displayTajwid() {
    let pronunciationPoint;
    if (al_HalQ.includes(id)) {
        pronunciationPoint = 'الحَلْق';
    }
    if (al_lisaan.includes(id)) {
        pronunciationPoint = 'اللِّسَان';
    }
    if (ach_chafatayn.includes(id)) {
        pronunciationPoint = 'الشَّفَتَان';
    }
    let characteristic1 = al_hams.includes(id) ? 'الهَمْس' : 'الجَهْر'
    let characteristic2 = ach_chiddah.includes(id) ? 'الشِّدَّة' : al_bayniyah.includes(id) ? 'al_bayniyah' : 'الرخاوة';
    document.getElementById('pronunciation-point').innerHTML = pronunciationPoint;
    document.getElementById('characteristic1').innerHTML = characteristic1;
    document.getElementById('characteristic2').innerHTML = characteristic2;
    document.getElementById('tajwid').classList.remove('hide');
}
let al_HalQ = [6, 7, 18, 19, 26];
let al_lisaan = [3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 21, 22, 23, 25, 28];
let ach_chafatayn = [2, 20, 24, 27];

let al_hams = [3, 4, 6, 7, 12, 13, 14, 20, 22, 26];
let ach_chiddah = [1, 2, 3, 5, 8, 16, 21, 22];
let al_bayniyah = [10, 18, 23, 24, 25];