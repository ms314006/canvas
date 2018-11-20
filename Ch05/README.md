## Ch05 互動動畫

### 移動的準心
---
1. 建立變數 `mouseX` 和 `mouseY` ，並指派為 0
    ```javascript
    let mouseX = 0
    let mouseY = 0
    ```
2. 在背景增加一個偵測器，當滑鼠游標改變位置時執行 `updateMove`
    ```javascript
    document.addEventListener("mousemove", updateMove)
    ```
>>>
補充說明：
* `document.addEventListener()` 是網頁的偵測器，他帶有兩個參數
    * 第一個是偵測的類型， `mousemove` 為滑鼠移動時觸發。
    * 第二個參數是一個 `function` ，在偵測類型觸發時會執行。
>>>
3. 製作一個 `function` 名字是 `updateMove`
    ```javascript
    function updateMove(e){
        
    }
    ```
>>>
備註說明：
* `updateMove` 接收了一個引數 `e` ，他會帶有關於觸發 `function` 的資料。上方觸發內容是 `mousemove` 滑鼠移動，因此此時的 `e` 會帶有滑鼠的相關資訊。
>>>
4. 在 `updateMove` 中把滑鼠的位置記錄到 `mouseX` 和 `mouseY` 中
    ```javascript
    mouseX = e.x
    mouseY = e.y
    ```
>>>
備註說明：
* 在觸發 `mousemove` 滑鼠移動的相關資訊中， `x` 及 `y` 是目前滑鼠的位置
>>>
5. 製作一個 `function` 名字是 `draw`
    ```javascript
    function draw(){

    }
    ```
6. 在 `draw` 中先清空 `canvas` 上的所有繪製圖形
    ```javascript
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ```
7. 在清空後，儲存目前畫布狀態
    ```javascript
    ctx.save()
    ```
8. 變更基準點至目前滑鼠位置
    ```javascript
    ctx.translate(mouseX, mouseY)
    ```
>>>
備註說明：
* 上方指定繪製位置為 `mouseX` 和 `mouseY` ，因此當這兩個變數的值在監聽到滑鼠移動變化時，基準點也會跟著變動。
>>>
9. 在基準點上繪製一個紅色的圓形
    ```javascript
    ctx.beginPath()
    ctx.arc(0,0,10,0,Math.PI*2)
    ctx.strokeStyle = '#FF0000'
    ctx.stroke()
    ```
10. 使用迴圈，因為十字線條從圓心出去有四條線，因此跑四次迴圈
    ```javascript
    for(let i=0;i<4;i=i+1){
        /*（11）*/
    }
    ```
>>>
備註說明：
* 在迴圈一開始建立 `i` 為 0 ，每一次的迴圈都加上 90 ，一直到下一次 `i` 達到 360 便不再執行。
>>>
11. 在迴圈內旋轉角度 90 ，並畫上線條。
    ```javascript
    ctx.rotate(90 * Math.PI / 180)
    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.lineTo(20,0)
    ctx.stroke()
    ```
>>>
備註說明：
* 跑四次的結果為：
    * 第一次旋轉 90 度。
    * 第二次以旋轉 90 度的畫布再一次旋轉 90 度，也就是 180 度。
    * 第三次以旋轉 180 度的畫布再一次旋轉 90 度，也就是 270 度。
    * 第二次以旋轉 270 度的畫布再一次旋轉 90 度，也就是 360 度。
>>>
12. `draw` 的最後，將畫布回復至上一次儲存的狀態
    ```javascript
    ctx.restore()
    ```
13. 在 `draw` 外設置讓 `draw` 每 10 毫秒重新繪製一次
    ```javascript
    setInterval(draw, 10)
    ```

經上方步驟，頁面上會不停繪製由左向右移動的矩形（四邊形），結果可由以下頁面查閱：

[https://gqsm.gitlab.io/canvas/Ch05/ex01/index.html](https://gqsm.gitlab.io/canvas/Ch05/ex01/index.html)

程式碼：

[https://gitlab.com/GQSM/canvas/blob/master/Ch05/ex01/index.js](https://gitlab.com/GQSM/canvas/blob/master/Ch05/ex01/index.js)

### 天色變化
---
1. 建立變數 `mouseX` 和 `mouseY` 指派為 0 ，及另外兩個變數 `blue` 及 `green` 並指派為 180 及 255 。
    ```javascript
    let mouseX = 0
    let mouseY = 0
    let blue = 180
    let green = 255
    ```
>>>
備註說明：
* `blue` 及 `green` 會用來控制色階，當 `rgb(0,180,255)` 會剛好是天藍色，待會會將它作為初始值運用在填滿畫布。
>>>
2. 在背景增加一個偵測器，當滑鼠游標改變位置時執行 `updateMove`
    ```javascript
    document.addEventListener("mousemove", updateMove)
    ```
3. 製作一個 `function` 名字是 `updateMove` ，用來記錄滑鼠位置，並依滑鼠的 `Y` 軸位置依比例改變 `blue` 和 `green` 的值。
    ```javascript
    function updateMove(e){
        mouseX = e.x
        mouseY = e.y

        blue = 180 - (mouseY/canvas.height) * 180
        green = 255 - (mouseY/canvas.height) * 255 * 0.5
    }
    ```
>>>
備註說明：
* `blue` 用目前滑鼠的高度除上畫布高度乘上 180 取得滑鼠變化的比例，再用初始值扣掉該比例。
* `green` 用同樣方法得出比例後，透過乘上 0.5 來調整更細微的比例，再用初始值扣掉該比例。
>>>
4. 製作一個 `function` 名字是 `draw` ，並用 `reat()` 繪製填滿整個螢幕。
    ```javascript
    function draw(){
        ctx.rect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = 'rgb(0,' + blue + ',' + green + ')'
        ctx.fill()
    }
    ```
>>>
備註說明：
* 使用 `rect()` 繪製寬高和整個頁面相同的矩形，並搭配 `blue` 和 `green` 用 `rgb` 調和得顏色做填滿。
>>>
5. 在 `draw` 內繼續繪製，先 `save()` 儲存畫布狀態，再使用 `translate()` 將畫布中心移至滑鼠位置用 `arc` 繪製圓形。
    ```javascript
    ctx.save()
    ctx.translate(mouseX, mouseY)
    ctx.beginPath()
    ctx.arc(0, 0, 50, 0, Math.PI * 2)
    ctx.fillStyle = '#FFF700'
    ctx.strokeStyle = '#FFB300'
    ctx.fill()
    ctx.stroke()
    ```
6. 使用迴圈，在圓形周圍繪製線條，迴圈內執行 12 次，每次都旋轉 30 度，共繪製 12 條線。
    ```javascript
    for(let i=0;i<13;i=i+1){
        ctx.rotate(30 * Math.PI / 180)
        ctx.beginPath()
        ctx.moveTo(70,0)
        ctx.lineTo(120,0)
        ctx.stroke()
    }
    ```
7. `draw` 的最後，將畫布回復至上一次儲存的狀態
    ```javascript
    ctx.restore()
    ```
8. 在 `draw` 外設置讓 `draw` 每 10 毫秒重新繪製一次
    ```javascript
    setInterval(draw, 10)
    ```
經上方步驟，頁面上會隨著鼠標移動擁有天色變化的效果，結果可由以下頁面查閱：

[https://gqsm.gitlab.io/canvas/Ch05/ex02/index.html](https://gqsm.gitlab.io/canvas/Ch05/ex02/index.html)

程式碼：

[https://gitlab.com/GQSM/canvas/blob/master/Ch05/ex02/index.js](https://gitlab.com/GQSM/canvas/blob/master/Ch05/ex02/index.js)

### 小畫家
---
1. 建立變數 `mouseX` 和 `mouseY` 指派為 0 ，再建立另一個紀錄滑鼠狀態，初始值為 `false`
    ```javascript
    let mouseX = 0
    let mouseY = 0
    let mouseStatus = false
    ```
2. 在背景增加一個偵測器，當滑鼠游標改變位置時執行 `updateMove`
    ```javascript
    document.addEventListener("mousemove", updateMove)
    ```
3. 製作一個 `function` 名字是 `updateMove` ，並在觸發時更新滑鼠座標
    ```javascript
    function updateMove(e){
        mouseX = e.x
        mouseY = e.y
    }
    ```
4. 在背景另外增加偵測器，當滑鼠游標點下時變更 `mouseStatus` 的狀態，並執行 `draw`
    ```javascript
    document.addEventListener("mousedown", function(){
        mouseStatus = true
        draw()
    })
    ```
>>>
備註說明：
* `mousedown` 也是偵聽器的一種類型，為滑鼠點下時觸發。
>>>
5. 製作一個 `function` 名字是 `draw` 。在 `draw` 內開啟繪畫路徑，並用 `moveTo` 指定目前滑鼠位置為初始繪圖的點。
    ```javascript
    function draw(){
        ctx.beginPath()
        ctx.moveTo(mouseX, mouseY)
    }
    ```
>>>
備註說明：
* 在這裡不需要清空 `canvas` 畫布，因為要留下之前繪過的痕跡。
>>>
6. 在滑鼠移動時觸發的 `updateMove` 內，判斷目前 `mouseStatus` 的狀態為 `true` 時使用 `lineTo` 將線連在一起並繪製。
	```javascript
    function updateMove(e){
        mouseX = e.x
        mouseY = e.y
        if (mouseStatus == true) {
            ctx.lineTo(mouseX, mouseY)
            ctx.stroke()
        }
    }
    ```
>>>
備註說明：
* 當滑鼠點下時會將 `mouseStatus` 變為 `true` ，因此在滑鼠還未放開時，持續繪畫。
>>>
7. 增加一個監聽器，在滑鼠放開時變更 `mouseStatus` 為 `false` 。
    ```javascript
    document.addEventListener("mouseup", function(){ mouseStatus = false })
    ```
>>>
備註說明：
* 當在這裡放開滑鼠時， `mouseStatus` 會被設定為 `false` ，便不會再 `updateMove` 中持續繪製，一直到滑鼠再一次點下，觸發 `mousedown` 時才會再開始繪圖。
>>>

經上方步驟，頁面上會變成一個簡單的小畫家繪板，結果可由以下頁面查閱：

[https://gqsm.gitlab.io/canvas/Ch05/ex03/index.html](https://gqsm.gitlab.io/canvas/Ch05/ex03/index.html)

程式碼：

[https://gitlab.com/GQSM/canvas/blob/master/Ch05/ex03/index.js](https://gitlab.com/GQSM/canvas/blob/master/Ch05/ex03/index.js)