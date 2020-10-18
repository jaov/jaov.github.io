const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

// Creating a new image
let img = new Image();
img.src = 'images/Green-Cap-Character';

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
