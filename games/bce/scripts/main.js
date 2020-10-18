const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

//Changing the title to Notorious B.C.E.
document.title = 'Notorious B.C.E'

// Creating a new image
let img = new Image();
img.src = 'images/Green-Cap-Character.png';

// Initializing when image is loaded
img.onload = function() {
    init();
};

// Selecting canvas on the document
let canvas = document.querySelector('canvas');
// ctx is context
let ctx = canvas.getContext('2d');

// variables to understand the calls better
const scale = 2;
const width = 16;
const height = 18;
const scaledWidth = scale * width;
const scaledHeight = scale * height;

// Simplifying the drawImage call with variable names
function drawFrame(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(img, frameX * width, frameY * height, width, height,
                  canvasX, canvasY, scaledWidth, scaledHeight);
}
// body of init function
function init() {
    // calling the drawImage function reading
    // from the spritesheet.
    drawFrame(0,0,0,0);
    drawFrame(1,0, scaledWidth, 0);
    drawFrame(0,0, scaledWidth * 2, 0);
    drawFrame(2,0, scaledWidth * 3, 0);
}
