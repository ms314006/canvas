let canvas = document.getElementById('myCanvas')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let ctx = canvas.getContext('2d')

ctx.fillRect(50,50,200,200)
ctx.fillStyle = 'rgba(255,0,0,0.4)'
ctx.fillRect(100,100,200,200)