let canvas = document.getElementById('myCanvas')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let ctx = canvas.getContext('2d')

let grad = ctx.createLinearGradient(0,0,0,150)
grad.addColorStop(0, '#FFFFFF')
grad.addColorStop(1, '#FF0000')

ctx.fillStyle = grad
ctx.fillRect(10,10,200,150)
ctx.strokeStyle = grad
ctx.strokeRect(250,10,200,150)