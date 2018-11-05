let canvas = document.getElementById('myCanvas')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let ctx = canvas.getContext('2d')

ctx.globalAlpha = 0.2
ctx.fillRect(50,50,200,200)
ctx.fillStyle = '#FF0000'
ctx.fillRect(100,100,200,200)