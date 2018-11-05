let canvas = document.getElementById('myCanvas')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let ctx = canvas.getContext('2d')

let grad = ctx.createRadialGradient(100,100,100,150,150,10)
grad.addColorStop(0, '#FFFFFF')
grad.addColorStop(1, '#FF0000')

ctx.fillStyle = grad
ctx.fillRect(0,0,200,200)