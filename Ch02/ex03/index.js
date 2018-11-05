let canvas = document.getElementById('myCanvas')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let ctx = canvas.getContext('2d')

ctx.fillStyle = '#FF0000'
ctx.fillRect(50,50,100,200)