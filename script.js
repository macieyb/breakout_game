// ---------------------
// --- Canvas basics ---

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var ballRadius = 10;

// --- Draw the ball ---

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#9edd1a";
    ctx.fill();
    ctx.closePath();
}

// fillStyle color randomizer
function colorRandomize() {
    return Math.floor(Math.random() * 16777215).toString(16);
}

function draw() {
    // clear canvas before each frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // draw the ball
    drawBall();
    // bouncing off the top and bottom
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    // bouncing off the left and right
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    // move after each frame
    x += dx;
    y += dy;
}

setInterval(draw, 10);