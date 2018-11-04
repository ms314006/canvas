let canvas = document.getElementById('myCanvas')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let ctx = canvas.getContext('2d')

//繪製一條從(0,0)到(50,50)的紅色線條
ctx.beginPath()
ctx.moveTo(0,0)
ctx.lineTo(50,50)
ctx.strokeStyle = '#FF0000'
ctx.stroke()
