let canvas = document.getElementById('myCanvas')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let ctx = canvas.getContext('2d')

let mouseX = 0
let mouseY = 0
let mouseStatus = false

document.addEventListener("mousemove", updateMove)

document.addEventListener("mousedown", function(){
    mouseStatus = true
    draw()
})
document.addEventListener("mouseup", function(){ mouseStatus = false })

function updateMove(e) {
    mouseX = e.x
    mouseY = e.y
    if (mouseStatus) {
        ctx.lineTo(mouseX, mouseY)
        ctx.stroke()
    }
}

function draw() {
    ctx.beginPath()
    ctx.moveTo(mouseX, mouseY)
}
