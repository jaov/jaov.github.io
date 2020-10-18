const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

//Changing the title to Notorious B.C.E.
document.title = 'Notorious B.C.E'

// Creating a new image
let img = new Image();
img.src = 'images/Green-Cap-Character.png';

// Initializing when image is loaded
img.onload = function() {
    window.requestAnimationFrame(gameLoop);
};

// Selecting canvas on the document
let canvas = document.querySelector('canvas');
// ctx is context (we are using 2d)
let ctx = canvas.getContext('2d');

// variables to understand the calls better
const SCALE = 2;
const WIDTH = 16;
const HEIGHT = 18;
const SCALED_WIDTH = scale * width;
const SCALED_HEIGHT = scale * height;

// Simplifying the drawImage call with variable names
function drawFrame(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(img, frameX * width, frameY * height, width, height,
                  canvasX, canvasY, scaledWidth, scaledHeight);
}

// Changing this for directions
// and also for game loop logic
const CYCLE_LOOP = [0, 1, 0, 2];
let currentLoopIndex = 0;
let frameCount = 0;
let currentDirection = 0;

// body of init function
function gameLoop() {
    window.requestAnimationFrame(gameLoop);
}
