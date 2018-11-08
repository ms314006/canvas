let canvas = document.getElementById('myCanvas')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let ctx = canvas.getContext('2d')

let mouseX = 0
let mouseY = 0

document.addEventListener("mousemove", updateMove)

function updateMove(e) {
    mouseX = e.x
    mouseY = e.y
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.save()
    ctx.translate(mouseX, mouseY)
    ctx.beginPath()
    ctx.arc(0, 0, 10, 0, Math.PI * 2)
    ctx.strokeStyle = '#FF0000'
    ctx.stroke()

    for(let i=0;i<360;i=i+90){
        ctx.rotate(i * Math.PI / 180)
        ctx.beginPath()
        ctx.moveTo(0,0)
        ctx.lineTo(20,0)
        ctx.stroke()
    }

    ctx.restore()

}

setInterval(draw, 10)