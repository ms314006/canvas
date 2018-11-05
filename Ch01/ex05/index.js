let canvas = document.getElementById('myCanvas')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.moveTo(20,100)
ctx.quadraticCurveTo(60,0,100,100)
ctx.stroke()