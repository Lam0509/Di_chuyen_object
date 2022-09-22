
function Object(x, y, color, width, height, speed) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = width;
    this.height = height;
    this.color = color;
    this.speed = speed;
    this.showObject = function () {
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.stroke();
    }
    this.clearObject = function () {
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.clearRect(this.x, this.y, this.width, this.height);
    }
    this.moveRight = function () {
        this.x += this.speed;
    }
    this.moveDown = function () {
        this.y += this.speed;
    }
    this.moveLeft = function () {
        this.x -= this.speed;
    }
    this.moveUp = function () {
        this.y -= this.speed;
    }
    this.changeSpeed = function (speed) {
        this.speed = speed;
        return this.speed;
    }
}
let canvas = new Object(0, 0, 'black', 20, 20, 20)
canvas.showObject();

function moveContinous() {
    canvas.clearObject();
    if (canvas.x < 480 && canvas.y == 0) {
        canvas.moveRight();
    }
    if (canvas.x == 480 && canvas.y < 480) {
        canvas.moveDown();
    }
    if (canvas.y == 480 && canvas.x <= 480 && canvas.x > 0) {
        canvas.moveLeft();
    }
    if (canvas.x == 0 && canvas.y <= 480) {
        canvas.moveUp();
    }
    canvas.showObject();
    setTimeout(moveContinous, 100);
}

moveContinous();
canvas.changeSpeed(10);