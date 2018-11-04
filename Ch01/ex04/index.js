let canvas = document.getElementById('myCanvas')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.arc(100, 100, 50, 0, Math.PI * 2)
ctx.stroke()


ctx.beginPath()
ctx.arc(300, 100, 50, 0, Math.PI)
ctx.closePath()
ctx.fill()