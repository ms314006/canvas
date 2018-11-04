let canvas = document.getElementById('myCanvas')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let ctx = canvas.getContext('2d')
ctx.strokeRect(100,100,250,500)
ctx.fillRect(400,100,200,200)

ctx.clearRect(300,200,200,50)