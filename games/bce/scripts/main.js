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

// body of init function
function init() {
    // TODO animation code
}
