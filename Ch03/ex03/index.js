let canvas = document.getElementById('myCanvas')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let ctx = canvas.getContext('2d')


ctx.strokeRect(0,0,40,40)

ctx.scale(2,2)
ctx.strokeStyle = '#FF0000'
ctx.strokeRect(0,0,40,40)


ctx.scale(0.25,0.25)
ctx.strokeStyle = '#00FF00'
ctx.strokeRect(0,0,40,40)