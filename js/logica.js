const ROWS = 10;
const ROW_ITEMS = 25;
const COVER_PROBABILTY = 0;
const alreadyDone = [];

var randomImages = ["\/cdn-cgi\/image\/format=auto,fit=cover,width=128,height=128,quality=25\/https:\/\/avatarai.me\/assets\/samples\/black-woman\/professional-headshots.jpeg?", "\/cdn-cgi\/image\/format=auto,fit=cover,width=128,height=128,quality=25\/https:\/\/avatarai.me\/assets\/samples\/black-woman\/cyberpunk.jpeg?", "\/cdn-cgi\/image\/format=auto,fit=cover,width=128,height=128,quality=25\/https:\/\/avatarai.me\/assets\/samples\/black-woman\/instagram-model.jpeg?"];

const containerBg = document.getElementById("netflix-container-bg");


let change = COVER_PROBABILTY / 100;

for (let i = 0; i < ROWS; i++) {
    const box = createBox();
    for (let i = 0; i < ROW_ITEMS; i++) {
        Math.random() < chance ?
            createElement(box, "netflix-cover") :
            createElement(box, "netflix-thumbnail");
    }
}

function createElement(box, classname) {
    const element = document.createElement("div");
    imageNumber = Math.floor(Math.random() * randomImages.length);
    // hot fix to avoid random pics
    if (in_array(imageNumber, alreadyDone)) imageNumber = Math.floor(Math.random() * randomImages.length);
    if (in_array(imageNumber, alreadyDone)) imageNumber = Math.floor(Math.random() * randomImages.length);
    if (in_array(imageNumber, alreadyDone)) imageNumber = Math.floor(Math.random() * randomImages.length);
    if (in_array(imageNumber, alreadyDone)) imageNumber = Math.floor(Math.random() * randomImages.length);
    if (in_array(imageNumber, alreadyDone)) imageNumber = Math.floor(Math.random() * randomImages.length);
    if (in_array(imageNumber, alreadyDone)) imageNumber = Math.floor(Math.random() * randomImages.length);
    if (in_array(imageNumber, alreadyDone)) imageNumber = Math.floor(Math.random() * randomImages.length);
    if (in_array(imageNumber, alreadyDone)) imageNumber = Math.floor(Math.random() * randomImages.length);
    if (in_array(imageNumber, alreadyDone)) imageNumber = Math.floor(Math.random() * randomImages.length);
    if (in_array(imageNumber, alreadyDone)) imageNumber = Math.floor(Math.random() * randomImages.length);
    if (in_array(imageNumber, alreadyDone)) imageNumber = Math.floor(Math.random() * randomImages.length);
    if (in_array(imageNumber, alreadyDone)) imageNumber = Math.floor(Math.random() * randomImages.length);
    if (in_array(imageNumber, alreadyDone)) imageNumber = Math.floor(Math.random() * randomImages.length);
    if (in_array(imageNumber, alreadyDone)) imageNumber = Math.floor(Math.random() * randomImages.length);
    if (in_array(imageNumber, alreadyDone)) imageNumber = Math.floor(Math.random() * randomImages.length);
    if (in_array(imageNumber, alreadyDone)) imageNumber = Math.floor(Math.random() * randomImages.length);
    if (in_array(imageNumber, alreadyDone)) imageNumber = Math.floor(Math.random() * randomImages.length);
    if (in_array(imageNumber, alreadyDone)) imageNumber = Math.floor(Math.random() * randomImages.length);

    randomImage = randomImages[imageNumber];
    alreadyDone.push(imageNumber);
    let background = 'url(' + randomImage + ')';
    element.style.backgroundImage = background;
    element.classList.add(classname);
    box.appendChild(element);
}

function createBox() {
    const box = document.createElement("div");
    box.classList.add("netflix-box");
    containerBg.appendChild(box);
    return box;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}