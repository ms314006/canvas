let canvas = document.getElementById('myCanvas')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let ctx = canvas.getContext('2d')

ctx.moveTo(50,0)
ctx.lineTo(100,100)
ctx.lineTo(0,100)
ctx.closePath()
ctx.stroke()
ctx.fillStyle = '#FF0000'
ctx.fill()
