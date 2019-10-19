class Bubble {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    display() {
        console.log(this.x, this.y, this.radius);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'red';
        ctx.fill();
    }

    move() {

    }
}