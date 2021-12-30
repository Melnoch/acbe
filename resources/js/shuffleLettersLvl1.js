let id = 0;
let idMax = 28;
$('#dropdownLessonList a').click(function () {
    idMax = parseInt(this.id) + 1;
    $('#dropdownLesson').html($(this).text() + '<span class="caret"></span>')
})

function shuffleLetters() {
    id = Math.floor(Math.random() * idMax);
    let lettersByPosition = [letters];
    let choices = 1;
    let startElement = document.getElementById('start');
    if (startElement.checked) {
        lettersByPosition.push(lettersBeginning);
        choices++;
    }
    let middleElement = document.getElementById('middle');
    if (middleElement.checked) {
        lettersByPosition.push(lettersMiddle);
        choices++;
    }
    let endElement = document.getElementById('end');
    if (endElement.checked) {
        lettersByPosition.push(lettersEnd);
        choices++;
    }
    let element = document.getElementById('letter');
    let selectedLetterArrayId = Math.floor(Math.random() * choices);
    console.log("Which array is selected: " + selectedLetterArrayId)
    let selectedLetterArray = lettersByPosition[selectedLetterArrayId]
    element.innerHTML = selectedLetterArray[id];
    element.onclick = function () {
        play(id + '_audio')
    }

}

let letters = [
    'ب',
    'م',
    'ر',
    'ا',
    'خ',
    'ت',
    'ز',
    'ك',
    'ج',
    'ث',
    'د',
    'س',
    'ض',
    'ح',
    'ع',
    'ف',
    'ل',
    'ذ',
    'ش',
    'ص',
    'غ',
    'ق',
    'ن',
    'ط',
    'ه',
    'و',
    'ظ',
    'ي'
];
let lettersBeginning = [
    'بـ',
    'مـ',
    'ر',
    'ا',
    'خـ',
    'تـ',
    'ز',
    'كـ',
    'جـ',
    'ثـ',
    'د',
    'سـ',
    'ضـ',
    'حـ',
    'عـ',
    'فـ',
    'لـ',
    'ذ',
    'شـ',
    'صـ',
    'غـ',
    'قـ',
    'نـ',
    'طـ',
    'هـ',
    'و',
    'ظـ',
    'يـ'
];
let lettersMiddle = [
    'ـبـ',
    'ـمـ',
    'ـر',
    'ـا',
    'ـخـ',
    'ـتـ',
    'ـز',
    'ـكـ',
    'ـجـ',
    'ـثـ',
    'ـد',
    'ـسـ',
    'ـضـ',
    'ـحـ',
    'ـعـ',
    'ـفـ',
    'ـلـ',
    'ـذ',
    'ـشـ',
    'ـصـ',
    'ـغـ',
    'ـقـ',
    'ـنـ',
    'ـطـ',
    'ـهـ',
    'ـو',
    'ـظـ',
    'ـيـ'
];
let lettersEnd = [
    'ـب',
    'ـم',
    'ـر',
    'ـا',
    'ـخ',
    'ـت',
    'ـز',
    'ـك',
    'ـج',
    'ـث',
    'ـد',
    'ـس',
    'ـض',
    'ـح',
    'ـع',
    'ـف',
    'ـل',
    'ـذ',
    'ـش',
    'ـص',
    'ـغ',
    'ـق',
    'ـن',
    'ـط',
    'ـه',
    'ـو',
    'ـظ',
    'ـي'
];