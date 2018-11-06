let canvas = document.getElementById('myCanvas')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let ctx = canvas.getContext('2d')

ctx.strokeRect(40,0,30,30)
ctx.rotate(Math.PI/4)
ctx.strokeRect(40,0,30,30)