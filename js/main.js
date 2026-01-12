const gamearea = document.getElementById('game-area')
const paddle = document.getElementById('paddle')
const ball = document.getElementById('ball')
const brickcontainer = document.getElementById('bricks-container')
const startmessege = document.getElementById('start-message')
const scoredisplay = document.getElementById('score')

const paddleSpeed = 8
let gameRunning = false
let ballSpeedX = 4
let ballSpeedY = 4
let score = 0
console.log('hadchi mzyan haliyan', paddle)

document.addEventListener('keydown',event => {
    console.log(event.key)
    console.log(event)
})