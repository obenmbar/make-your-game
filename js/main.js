
const gamearea = document.getElementById('game-area')
const paddle = document.getElementById('paddle')
const ball = document.getElementById('ball')
const brickcontainer = document.getElementById('bricks-container')
const startmessege = document.getElementById('start-message')
const scoredisplay = document.getElementById('score')

const paddleSpeed = 20
let gameRunning = false
let ballSpeedX = 2
let ballSpeedY = -2
let score = 0

const gamewidth = gamearea.clientWidth
let paddlewidth = paddle.offsetWidth
let startposition = (gamewidth - paddlewidth) / 2
let currentX = startposition
paddle.style.transform = `translateX(${startposition}px)`
// controle de paddle 

document.addEventListener('keydown', event => {


    if (event.key === 'ArrowRight') {
        let position = currentX + paddleSpeed
        currentX = position
        if (position < gamewidth - paddlewidth) {
            paddle.style.transform = `translateX(${position}px)`
        } else {
            currentX = gamewidth - paddlewidth
            paddle.style.transform = `translateX(${currentX}px)`

        }

    } else if (event.key === 'ArrowLeft') {
        if (currentX - paddleSpeed > 0) {
            var position = currentX - paddleSpeed
        } else {
            position = 0
        }
        currentX = position
        paddle.style.transform = `translateX(${position}px)`
    }
    moveBallWithPaddle()
})

let gameheight = gamearea.clientHeight
let ballwidth = ball.offsetWidth
let paddleheight = paddle.clientHeight
let ballX = 0
let ballY = gameheight - paddleheight - ballwidth -20

function moveBallWithPaddle(){
    ballX =  currentX + paddlewidth/2 - ballwidth/2
    ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
}

moveBallWithPaddle()


 function move(){
    
 }