let id = 0;
function shuffleLetterTajwid() {
    if (id === 0) {
        document.getElementById('tajwid-button').classList.remove('hide');
    }
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
    // id = Math.floor(Math.random() * 28) + 1;
    id = id + 1;
    console.log("Prochaine lettre n°" + id)
    document.getElementById('letter-' + id).classList.remove('hide');
}
function displayTajwid() {
    let pronunciationPoint;
    if (al_jawf.includes(id)) {
        pronunciationPoint = 'الجَوْف';
    }
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
    let characteristic2 = ach_chiddah.includes(id) ? 'الشِّدَّة' : al_bayniyah.includes(id) ? 'البَيْنِيَة' : 'الرخاوة';
    let characteristic3 = al_isti3laa.includes(id) ? 'الإِسْتِعْلَاء' : 'الإِسْتِفَال';
    let characteristic4 = al_iTbaQ.includes(id) ? 'الإِطْبَاق' : 'الإِنْفِتَاح';
    let characteristic5 = al_idhlaaQ.includes(id) ? 'الإِذْلَاق' : 'الإِصْمَات';
    document.getElementById('pronunciation-point').innerHTML = pronunciationPoint;
    document.getElementById('characteristic1').innerHTML = characteristic1;
    document.getElementById('characteristic2').innerHTML = characteristic2;
    document.getElementById('characteristic3').innerHTML = characteristic3;
    document.getElementById('characteristic4').innerHTML = characteristic4;
    document.getElementById('characteristic5').innerHTML = characteristic5;
    let compteur = 6;
    if (al_istiTaalah.includes(id)) {
        document.getElementById('characteristic' + compteur).innerHTML = 'الإِسْتِطَالَة';
        compteur = compteur + 1;
    }
    if (aS_Safiir.includes(id)) {
        document.getElementById('characteristic' + compteur).innerHTML = 'الصَّفِير';
        compteur = compteur + 1;
    }
    if (at_tafachchiyy.includes(id)) {
        document.getElementById('characteristic' + compteur).innerHTML = 'التَّفَشِّي';
        compteur = compteur + 1;
    }
    if (at_takriir.includes(id)) {
        document.getElementById('characteristic' + compteur).innerHTML = 'التَّكْرِير';
        compteur = compteur + 1;
    }
    if (al_inHiraaf.includes(id)) {
        document.getElementById('characteristic' + compteur).innerHTML = 'الإِنْحِرَاف';
        compteur = compteur + 1;
    }
    if (al_QalQalah.includes(id)) {
        document.getElementById('characteristic' + compteur).innerHTML = 'القَلْقَلَة';
        compteur = compteur + 1;
    }
    if (al_liin.includes(id)) {
        document.getElementById('characteristic' + compteur).innerHTML = 'اللِّين';
    }
    document.getElementById('tajwid').classList.remove('hide');
}
let al_jawf = [1];
let al_HalQ = [6, 7, 18, 19, 26];
let al_lisaan = [3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 21, 22, 23, 25, 28];
let ach_chafatayn = [2, 20, 24, 27];

let al_hams = [3, 4, 6, 7, 12, 13, 14, 20, 22, 26];
let ach_chiddah = [1, 2, 3, 5, 8, 16, 21, 22];
let al_bayniyah = [10, 18, 23, 24, 25];
let al_isti3laa = [7, 14, 15, 16, 17, 19, 21];
let al_iTbaQ = [14, 15, 16, 17];
let al_idhlaaQ = [2, 10, 20, 23, 24, 25];
let al_istiTaalah = [15];
let aS_Safiir = [11, 12, 14];
let at_tafachchiyy = [13];
let at_takriir = [10];
let al_inHiraaf = [10, 23];
let al_QalQalah = [2, 5, 8, 16, 21];
let al_liin = [27, 28];
