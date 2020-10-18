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

// The loop goes idle, left, idle, right.
const cycleLoop = [0, 1, 0, 2];
let currentLoopIndex = 0;

// At the moment clears all the canvas as to not redraw,
// I have to fix this later!
function step() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0);
      currentLoopIndex++;
      if (currentLoopIndex >= cycleLoop.length) {
              currentLoopIndex = 0;
            }
      window.requestAnimationFrame(step);
}


// Simplifying the drawImage call with variable names
function drawFrame(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(img, frameX * width, frameY * height, width, height,
                  canvasX, canvasY, scaledWidth, scaledHeight);
}
// body of init function
function init() {
    window.requestAnimationFrame(step);
}
