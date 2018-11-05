let canvas = document.getElementById('myCanvas')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.moveTo(20,50)
ctx.lineTo(120,50)
ctx.lineWidth = 2
ctx.stroke()

ctx.beginPath()
ctx.moveTo(20,80)
ctx.lineTo(120,80)
ctx.lineWidth = 5
ctx.stroke()