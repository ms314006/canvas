let canvas = document.getElementById('myCanvas')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.moveTo(20,100)
ctx.bezierCurveTo(30,0,40,20,100,100)
ctx.bezierCurveTo(170,200,190,150,200,100)
ctx.stroke()