const replaceAllElement = document.getElementById('text');
const replaceAllText = replaceAllElement.innerText;
const replaceAllButton = document.getElementById('guzior');
replaceAllButton.innerText = "Zastąp każde słowo 'Microsoft' słowem 'JanuszPol'";
replaceAllButton.addEventListener("click", function () {
    replaceAllElement.innerText = replaceAllText.replaceAll('Microsoft','JanuszPol');
});
const tekst = document.getElementById('tekst');
const zaba = tekst.innerText;
const guzik1 = document.getElementById('guzik1');
guzik1.innerText = "Zmień wszystkie litery na wielkie";
guzik1.addEventListener("click", function () {
    tekst.innerText = zaba.toUpperCase();
});

const guzik2 = document.getElementById('guzik2');
guzik2.innerText = "Zmień wszystkie litery na małe";
guzik2.addEventListener("click", function () {
    tekst.innerText = zaba.toLowerCase();
});
const guzik3 = document.getElementById('guzik3');
guzik3.innerText = "Przywró początkową wielkość znaków";
guzik3.addEventListener("click", function () {
    tekst.innerText = zaba;
});
