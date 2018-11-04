function documentInit() {
    document.onkeydown = function (event) {
        characterA.writeKeyCode(event)
    }
    document.onkeyup = function (event) {
        characterA.cancelWriteKeyCode(event)
    }
    characterA.moveCoordinate()
}

function Character(x, y) {
    this.x = x
    this.y = y
    this.keyMap = {}
    this.init = false
    this.draw = (color = '#FF3333') => {
        ctx.fillStyle = color
        ctx.fillRect(this.x, this.y, 50, 50)
    }
    this.getCoordinate = () => {
        return { xIndex: this.x, yIndex: this.y }
    }

    this.writeKeyCode = (event) => {
        this.keyMap[event.key] = (event.type === 'keydown')
    }

    this.cancelWriteKeyCode = (event) => {
        this.keyMap[event.key] = false
    }

    this.moveCoordinate = () => {
        if (this.keyMap['ArrowUp'])
            this.jump()
        else if (this.keyMap['ArrowRight'])
            this.x += 10
        else if (this.keyMap['ArrowLeft'])
            this.x -= 10

        if (!this.init) {
            this.init = true
            setInterval(this.moveCoordinate, 100)
        }
    }

    this.jump = () => {
        if (sencesA.checkDrop(this.x, this.y)) {
            for (let cd = 0; cd < 400; cd++) {
                setTimeout(() => {
                    this.y += (cd < 200) ? -1 : 1
                    if (this.keyMap['ArrowRight']) {
                        this.x += 0.25
                    }
                    else if (this.keyMap['ArrowLeft']) {
                        this.x -= 0.25
                    }
                }, cd * 1.5)
            }
        }
    }
} 

function Sences() {
    this.draw = () => {
        ctx.beginPath()
        ctx.strokeStyle = '#000000'
        ctx.moveTo(0, 600)
        ctx.lineTo(500, 600)
        ctx.stroke()
    }
    //傳進主角目前座標判斷是否繼續掉落
    this.checkDrop = (characterX, characterY) => {
        if (characterY === 550)
            return true
        else
            return false
    }
}


let canvas = document.getElementById('myCanvas')
let ctx = canvas.getContext('2d')

let characterA = new Character(ctx,100, 550)
let sencesA = new Sences(ctx)

//初始化（角色移動）
documentInit()

const draw = () => {
    //先清空
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    canvas.height = window.innerHeight
    canvas.width = window.innerWidth

    //畫隔線
    ctx.beginPath()
    ctx.fillStyle = '#000000'
    ctx.strokeStyle = '#DDDDDD'
    for (let i = 0; i <= canvas.width; i += 100) {
        ctx.moveTo(i, 0)
        ctx.lineTo(i, canvas.height)
        ctx.fillText(i, i, 10)

        ctx.moveTo(0, i)
        ctx.lineTo(canvas.width, i)
        ctx.fillText(i, 0, i)
    }
    ctx.stroke()

    characterA.draw()
    sencesA.draw()
}


setInterval(draw, 10)