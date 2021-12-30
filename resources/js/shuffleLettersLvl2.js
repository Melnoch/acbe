let id = 0;
let idMax = 20;
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
    let selectedLetterArray = lettersByPosition[selectedLetterArrayId]
    let selectedPairLetterArray = selectedLetterArray[id]
    let selectedLetterId = Math.floor(Math.random() * 2);
    element.innerHTML = selectedPairLetterArray[selectedLetterId];
    element.onclick = function () {
        play(id + '_' + selectedLetterId + '_audio')
    }
}
let letters = [
    ['ب', 'م'],
    ['ر', 'ل'],
    ['ج', 'ش'],
    ['د', 'ض'],
    ['ع', 'ا'],
    ['ق', 'ك'],
    ['س', 'ث'],
    ['ح', 'ه'],
    ['ذ', 'ز'],
    ['خ', 'غ'],
    ['ت', 'ط'],
    ['س', 'ص'],
    ['ظ', 'ذ'],
    ['و', 'ي'],
    ['ف', 'ث'],
    ['ا', 'ه'],
    ['ا', 'ح'],
    ['د', 'ذ'],
    ['ر', 'غ'],
    ['ن', 'ب'],
    ['ت', 'ث']
];
let lettersBeginning = [
    ['بـ', 'مـ'],
    ['رـ', 'لـ'],
    ['جـ', 'شـ'],
    ['د', 'ضـ'],
    ['عـ', 'ا'],
    ['قـ', 'كـ'],
    ['سـ', 'ثـ'],
    ['حـ', 'هـ'],
    ['ذ', 'ز'],
    ['خـ', 'غـ'],
    ['تـ', 'طـ'],
    ['سـ', 'صـ'],
    ['ظـ', 'ذ'],
    ['و', 'يـ'],
    ['فـ', 'ثـ'],
    ['ا', 'هـ'],
    ['ا', 'حـ'],
    ['د', 'ذ'],
    ['ر', 'غـ'],
    ['نـ', 'بـ'],
    ['تـ', 'ثـ']
];
let lettersMiddle = [
    ['ـبـ', 'ـمـ'],
    ['ـر', 'ـلـ'],
    ['ـجـ', 'ـشـ'],
    ['ـد', 'ـضـ'],
    ['ـعـ', 'ـا'],
    ['ـقـ', 'ـكـ'],
    ['ـسـ', 'ـثـ'],
    ['ـحـ', 'ـهـ'],
    ['ـذ', 'ـز'],
    ['ـخـ', 'ـغـ'],
    ['ـتـ', 'ـطـ'],
    ['ـسـ', 'ـصـ'],
    ['ـظـ', 'ـذ'],
    ['ـو', 'ـيـ'],
    ['ـفـ', 'ـثـ'],
    ['ـا', 'ـهـ'],
    ['ـا', 'ـحـ'],
    ['ـد', 'ـذ'],
    ['ـر', 'ـغـ'],
    ['ـنـ', 'ـبـ'],
    ['ـتـ', 'ـثـ']
];
let lettersEnd = [
    ['ـب', 'ـم'],
    ['ـر', 'ـل'],
    ['ـج', 'ـش'],
    ['ـد', 'ـض'],
    ['ـع', 'ـا'],
    ['ـق', 'ـك'],
    ['ـس', 'ـث'],
    ['ـح', 'ـه'],
    ['ـذ', 'ـز'],
    ['ـخ', 'ـغ'],
    ['ـت', 'ـط'],
    ['ـس', 'ـص'],
    ['ـظ', 'ـذ'],
    ['ـو', 'ـي'],
    ['ـف', 'ـث'],
    ['ـا', 'ـه'],
    ['ـا', 'ـح'],
    ['ـد', 'ـذ'],
    ['ـر', 'ـغ'],
    ['ـن', 'ـب'],
    ['ـت', 'ـث']
];