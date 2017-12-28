// ---------------------
// --- Canvas basics ---

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;

// --- Draw the ball ---

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#9edd1a";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    // clear canvas before each frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // draw the ball
    drawBall();
    // move after each frame
    x += dx;
    y += dy;
}

setInterval(draw, 10);