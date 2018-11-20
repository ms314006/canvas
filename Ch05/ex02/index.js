let canvas = document.getElementById('myCanvas')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let ctx = canvas.getContext('2d')

let mouseX = 0
let mouseY = 0
let blue = 188
let green = 255

document.addEventListener("mousemove", updateMove)

function updateMove(e) {
    mouseX = e.x
    mouseY = e.y

    blue = 180 - (mouseY/canvas.height) * 180
    green = 255 - (mouseY/canvas.height) * 255 * 0.5
}

function draw() {
    ctx.rect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'rgb(0,' + blue + ',' + green + ')'
    ctx.fill()
    ctx.save()
    ctx.translate(mouseX, mouseY)
    ctx.beginPath()
    ctx.arc(0, 0, 50, 0, Math.PI * 2)
    ctx.fillStyle = '#FFF700'
    ctx.strokeStyle = '#FFB300'
    ctx.fill()
    ctx.stroke()

    for(let i=0;i<13;i=i+1){
        ctx.rotate(30 * Math.PI / 180)
        ctx.beginPath()
        ctx.moveTo(70,0)
        ctx.lineTo(120,0)
        ctx.stroke()
    }

    ctx.restore()

}

setInterval(draw, 10)