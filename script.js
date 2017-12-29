// ---------------------
// --- Canvas basics ---

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
var ballColor = "#9edd1a";
var paddleColor = "#0095DD";
var paddleHeight = 20;
var paddleWidth = 95;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


// --- Draw the ball ---

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = ballColor;
    ctx.fill();
    ctx.closePath();
}

// --- Draw the paddle ---

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = paddleColor;
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
    drawPaddle();
    // bouncing off the top and bottom
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
        ballColor = "#" + colorRandomize();
    }
    // bouncing off the left and right
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
        ballColor = "#" + colorRandomize();
    }
    // move after each frame
    x += dx;
    y += dy;
    // move the paddle
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    }
    else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
}

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    }
    else if (e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    }
    else if (e.keyCode == 37) {
        leftPressed = false;
    }
}

setInterval(draw, 10);