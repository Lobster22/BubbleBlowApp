const canvas = document.getElementById('canvasLOL');
const ctx = canvas.getContext('2d');
const canvasDom = canvas.getBoundingClientRect();
console.log(canvas);
console.log(ctx);

let start, stop;
let currentX, currentY, currentRadius;

canvas.addEventListener('touchstart', event => {
    console.log(event);

    start = new Date().getTime();
    // Get actual coordinates where click/touch.
    currentX = event.touches[0].clientX - canvasDom.left;
    currentY = event.touches[0].clientY - canvasDom.top;
})
canvas.addEventListener('touchend', () => {
    stop = new Date().getTime();
    currentRadius = (stop - start) / 10;
    let yourBubble = new Bubble(currentX, currentY, currentRadius);
    yourBubble.display();
})

console.log(canvas.getBoundingClientRect());