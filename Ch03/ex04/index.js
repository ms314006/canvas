let canvas = document.getElementById('myCanvas')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let ctx = canvas.getContext('2d')

ctx.save()

ctx.translate(100, 100)
ctx.beginPath()
ctx.arc(0, 0, 10, 0, Math.PI * 2)
ctx.stroke()

ctx.scale(2, 2)
ctx.beginPath()
ctx.arc(0, 0, 10, 0, Math.PI * 2)
ctx.strokeStyle = '#FF0000'
ctx.stroke()

ctx.rotate(Math.PI / 2)
ctx.beginPath()
ctx.arc(100, 0, 10, 0, Math.PI * 2)
ctx.strokeStyle = '#00FF00'
ctx.stroke()

ctx.restore()

ctx.strokeRect(0,0,50,50)