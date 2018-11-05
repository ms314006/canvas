let canvas = document.getElementById('myCanvas')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.moveTo(20,50)
ctx.lineTo(120,50)
ctx.strokeStyle = '#FF0000'
ctx.stroke()