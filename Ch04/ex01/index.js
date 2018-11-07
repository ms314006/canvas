let canvas = document.getElementById('myCanvas')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let ctx = canvas.getContext('2d')

let x = 0

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.strokeRect(x,0,100,100)
    x = x + 1
}
setInterval(draw, 10)