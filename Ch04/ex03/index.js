let canvas = document.getElementById('myCanvas')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let ctx = canvas.getContext('2d')

let x = 0
let y = 0
let moveX = 3
    let moveY = 2

function draw(){
    
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.beginPath()
    ctx.arc(x,y,50,0,Math.PI*2)
    ctx.fillStyle = '#FF0000'
    ctx.fill()

    x = x + moveX
    y = y + moveY

    if(x >= canvas.width)
        moveX = -3
    else if(x <= 0)
        moveX = 3

    if(y >= canvas.height)
        moveY = -2
    else if(y <= 0)
        moveY = 2

}

setInterval(draw, 10)