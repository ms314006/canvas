let canvas = document.getElementById('myCanvas')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let ctx = canvas.getContext('2d')

ctx.strokeRect(10,10,20,20)
ctx.translate(20,20)
ctx.strokeRect(10,10,20,20)