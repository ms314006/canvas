let canvas = document.getElementById('myCanvas')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let ctx = canvas.getContext('2d')

ctx.moveTo(0,0)
ctx.lineTo(50,50)
ctx.stroke()