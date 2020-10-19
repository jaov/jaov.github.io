const FRAME_LIMIT = 12;
const MOVEMENT_SPEED = 1;
const FACING_RIGHT =3;
const FACING_LEFT = 2;
const FACING_UP = 1;
const FACING_DOWN = 0;
const CYCLE_LOOP = [0, 1, 0, 2];
const HEIGHT = 18;
const WIDTH = 16;
const SCALE = 2;
const SCALED_HEIGHT = SCALE * HEIGHT;
const SCALED_WIDTH = SCALE * WIDTH;
const myHeading = document.querySelector('h1');


let positionY = 0;
let positionX = 0;
let keyPresses = {};
let currentDirection = FACING_DOWN;
let frameCount = 0;
let currentLoopIndex = 0;
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let img = new Image();

document.title = 'Notorious B.C.E'
myHeading.textContent = 'Codename: B.C.E.';
const myParagraph = document.querySelector('p');
myParagraph = 'Move with WASD';

window.addEventListener('keydown', keyDownListener, false);
function keyDownListener(event) {
    keyPresses[event.key] = true;
}

window.addEventListener('keyup', keyUpListener, false);
function keyUpListener(event) {
    keyPresses[event.key] = false;
}

function loadImage() {
    img.src = 'images/Green-Cap-Character.png';
    img.onload = function() {
        window.requestAnimationFrame(gameLoop);
    };
}



function drawFrame(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(img, frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,
                  canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
}


function moveCharacter(deltaX, deltaY, direction) {
    if (positionX + deltaX > 0 && positionX + SCALED_WIDTH + deltaX < canvas.width) {
        positionX += deltaX;
    }
    if (positionY + deltaY > 0 && positionY + SCALED_HEIGHT + deltaY < canvas.height) {
        positionY += deltaY;
    }
    currentDirection = direction;
}

loadImage();


function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let hasMoved = false;

    if (keyPresses.w) {
        moveCharacter(0, -MOVEMENT_SPEED, FACING_UP);
        hasMoved = true;
    } else if (keyPresses.s) {
        moveCharacter(0, MOVEMENT_SPEED, FACING_DOWN);
        hasMoved = true;
    }

    if (keyPresses.a) {
        moveCharacter(-MOVEMENT_SPEED, 0, FACING_LEFT);
        hasMoved = true; 
    } else if (keyPresses.d) {
        moveCharacter(MOVEMENT_SPEED, 0, FACING_RIGHT);
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
    
    // If we stop moving, we make the current index 0
    // which is the resting position
    if (!hasMoved) {
        currentLoopIndex = 0;
    }

    drawFrame(CYCLE_LOOP[currentLoopIndex], currentDirection, positionX, positionY);
    window.requestAnimationFrame(gameLoop);
}
