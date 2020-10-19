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
const SCALED_WIDTH = SCALE * WIDTH;
const SCALED_HEIGHT = SCALE * HEIGHT;

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

// Marking the index of the character facing
const FACING_DOWN = 0;
const FACING_UP = 1;
const FACING_LEFT = 2;
const FACING_RIGHT =3;
let currentDirection = FACING_DOWN;

// Let's get some event listeners here
let keyPresses = {};

//These two just let me know when a key is pressed or not
window.addEventListener('keydown', keyDownListener, false);
function keyDownListener(event) {
    keyPresses[event.key] = true;
}

window.addEventListener('keyup', keyUpListener, false);
function keyUpListener(event) {
    keyPresses[event.key] = false;
}

// Now movement
const MOVEMENT_SPEED = 1;
let positionX = 0;
let positionY = 0;

// Animating again
const FRAME_LIMIT = 12;
// Body of init function
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let hasMoved = false;

    if (keyPresses.w) {
        positionY -= MOVEMENT_SPEED;
        currentDirection = FACING_UP;
        hasMoved = true;
    } else if (keyPresses.s) {
        positionY += MOVEMENT_SPEED;
        currentDirection = FACING_DOWN;
        hasMoved = true;
    }

    if (keyPresses.a) {
        positionX -= MOVEMENT_SPEED;
        currentDirection = FACING_LEFT;
        hasMoved = true;
        
    } else if (keyPresses.d) {
        positionX += MOVEMENT_SPEED;
        currentDirection = FACING_RIGHT;
        hasMoved = true;
    }

    if (hasMoved) {
        frameCount++;
        if (frameCount >= FRAME_LIMIT) {
            frameCount = 0;
            currentLoopIndex++;
            if (currentLoopIndex >= CYCLE_LOOP.length) {
                currentLoopIndex = 0;
            }
        }
    }

    drawFrame(0, currentDirection, positionX, positionY);
    window.requestAnimationFrame(gameLoop);
}
