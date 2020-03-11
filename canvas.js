let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//super object...our magic paint brush that draws what we want
let c = canvas.getContext('2d');

// first argument pertains to the x coordinate within the canvas
// second argument pertains to the 7 coordinate within the canvas
// third argument pertains to the width of the object being drawn
// fourth argument pertains to the height of the object being drawn
c.fillRect(100, 100, 100, 100);
c.fillRect(200, 200, 100, 100);
c.fillRect(300, 300, 100, 100);
console.log(canvas);