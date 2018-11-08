## Ch05 互動動畫

### 移動的準心
---
1. 建立一個變數`mouseX`和`mouseY`，並指派為0
    ```javascript
    let mouseX = 0
    let mouseY = 0
    ```
2. 在背景增加一個偵測器，當滑鼠游標改變位置時執行`updateMove`
    ```javascript
    document.addEventListener("mousemove", updateMove)
    ```
>>>
補充說明：
* `document.addEventListener()`是網頁的偵測器，他帶有兩個參數
    * 第一個是偵測的類型，`mousemove`為滑鼠移動時觸發。
    * 第二個參數是一個`function`，在偵測類型觸發時會執行。
>>>
3. 製作一個`function`名字是`updateMove`
    ```javascript
    function updateMove(e){
        
    }
    ```
>>>
備註說明：
* `updateMove`接收了一個引數`e`，他會帶有關於觸發`function`的資料。上方觸發內容是`mousemove`滑鼠移動，因此此時的`e`會帶有滑鼠的相關資訊。
>>>
4. 在`updateMove`中把滑鼠的位置記錄到`mouseX`和`mouseY`中
    ```javascript
    mouseX = e.x
    mouseY = e.y
    ```
>>>
備註說明：
* 在觸發`mousemove`滑鼠移動的相關資訊中，`x`及`y`是目前滑鼠的位置
>>>
5. 製作一個`function`名字是`draw`
    ```javascript
    function draw(){

    }
    ```
6. 在`draw`中先清空`canvas`上的所有繪製圖形
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
* 上方指定繪製位置為`mouseX`和`mouseY`，因此當這兩個變數的值在監聽到滑鼠移動變化時，基準點也會跟著變動。
>>>
9. 在基準點上繪製一個紅色的圓形
    ```javascript
    ctx.beginPath()
    ctx.arc(0,0,10,0,Math.PI*2)
    ctx.strokeStyle = '#FF0000'
    ctx.stroke()
    ```
10. 使用迴圈，以不同角度(0,90,180,270)畫出十字線條
    ```javascript
    for(let i=0;i<360;i=i+90){
        /*（11）*/
    }
    ```
>>>
備註說明：
* 在迴圈一開始建立`i`為0，每一次的迴圈都加上90，一直到下一次`i`達到360便不再執行。
>>>
11. 在迴圈內把畫布旋轉角度`i`，並畫上線條
    ```javascript
    ctx.rotate(i * Math.PI / 180)
    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.lineTo(20,0)
    ctx.stroke()
    ```
12. `draw`的最後，將畫布回復至上一次儲存的狀態
    ```javascript
    ctx.restore()
    ```
13. 在`draw`外設置讓`draw`每10毫秒重新繪製一次
    ```javascript
    setInterval(draw, 10)
    ```

經上方步驟，頁面上會不停繪製由左向右移動的矩形（四邊形），結果可由以下頁面查閱：

[https://gqsm.gitlab.io/canvas/Ch05/ex01/index.html](https://gqsm.gitlab.io/canvas/Ch05/ex01/index.html)

程式碼：

[https://gitlab.com/GQSM/canvas/blob/master/Ch05/ex01/index.js](https://gitlab.com/GQSM/canvas/blob/master/Ch05/ex01/index.js)
