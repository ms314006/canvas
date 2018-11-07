let canvas = document.getElementById('myCanvas')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let ctx = canvas.getContext('2d')

let t = 0

function draw() {
    ctx.save()
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.translate(canvas.width / 2, canvas.height / 2)
    ctx.beginPath()
    ctx.arc(0, 0, 100, 0, Math.PI * 2)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(0, 0, 250, 0, Math.PI * 2)
    ctx.stroke()

    ctx.rotate(t / 360 * Math.PI * 2)
    ctx.beginPath()
    ctx.arc(250, 0, 50, 0, Math.PI * 2)
    ctx.stroke()

    t = t + 1
    ctx.restore()
}

setInterval(draw,10)

