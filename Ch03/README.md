## Ch03 進階繪製技巧

### 移動畫布
---
1. 先繪製一個在`(10,10)`位置的矩形（四邊形）
    ```javascript
    ctx.strokeRect(10,10,20,20)
    ```
2. 將畫布的基準點`(0,0)`向右下移動至位置`(20,20)`，再在相同位置繪製矩形（四邊形）
    ```javascript
    ctx.translate(20,20)
    ctx.strokeRect(10,10,20,20)
    ```
>>>
備註說明：
* `translate()`帶有兩個參數
    * 分別是以`目前的基準`，要再對`X`軸及`Y`軸移動多少距離作為新基準點。
>>>

經上方步驟，縱使繪製兩個矩形（四邊形）的位置相同，但會因為基準點改變而不同，結果可由以下頁面查閱：

[https://gqsm.gitlab.io/canvas/Ch03/ex01/index.html](https://gqsm.gitlab.io/canvas/Ch03/ex01/index.html)

程式碼：

[https://gitlab.com/GQSM/canvas/blob/master/Ch03/ex01/index.js](https://gitlab.com/GQSM/canvas/blob/master/Ch03/ex01/index.js)

### 旋轉畫布
---
>>>
使用須知：
* 在JavaScript中`Math.PI`在角度中代表180度。
* `canvas`中角度的方向和一般相反，以圓心向右延伸的水平線為0度，由下開始增加度數。
>>>
1. 將畫布旋轉45度角
    ```javascript
    ctx.rotate(Math.PI/4)
    ```
>>>
備註說明：
* `rotate()`帶有一個參數，用來設定將畫布旋轉的角度。
* 當畫布透過設定`rotate()`旋轉角度時，整個`X`軸及`Y`軸座標都會跟著旋轉。因此當畫布被旋轉了180度時，那`X`和`Y`軸的變化都會與原來相反。
* 每一次使用`rotate()`將畫布旋轉時，都會以上一次旋轉的角度為基準，而不是初始角度。
>>>
2. 繪製一個矩形（四邊形）
    ```javascript
    ctx.strokeRect(40,0,30,30)
    ```

經上方步驟，`canvas`會在旋轉45度的畫布上繪製一個矩形（四邊形），結果可由以下頁面查閱：

[https://gqsm.gitlab.io/canvas/Ch03/ex02/index.html](https://gqsm.gitlab.io/canvas/Ch03/ex02/index.html)

程式碼：

[https://gitlab.com/GQSM/canvas/blob/master/Ch03/ex02/index.js](https://gitlab.com/GQSM/canvas/blob/master/Ch03/ex02/index.js)

### 縮放畫布
---
1. 先繪製一個矩形（四邊形）
    ```javascript
    ctx.strokeRect(0,0,40,40)
    ```
2. 將畫布縮放2倍
    ```javascript
    ctx.scale(2,2)
    ```
>>>
備註說明：
* `scale()`帶有兩個參數，分別為對`X`及`Y`軸的縮放倍率。
* 在使用`scale()`時會依照目前的倍率下去縮放，而不是初始倍率。
* 縮放後每1單位的距離和大小都會被縮放。
>>>
3. 並繪製一個與第一個位置及大小相同的紅色矩形（四邊形）
    ```javascript
    ctx.strokeStyle = '#FF0000'
    ctx.strokeRect(0,0,40,40)
    ```
4. 再將目前畫布尺寸（目前尺寸為原尺寸的2倍）縮放0.25倍
    ```javascript
    ctx.scale(0.25,0.25)
    ```
5. 並繪製一個與第一個位置及大小都相同的綠色矩形（四邊形）
    ```javascript
    ctx.strokeStyle = '#00FF00'
    ctx.strokeRect(0,0,40,40)
    ```
經上方步驟，畫布在不同比例的縮放下，以相同位置及大小繪製的矩形（四邊形）都不相同，結果可由以下頁面查閱：

[https://gqsm.gitlab.io/canvas/Ch03/ex03/index.html](https://gqsm.gitlab.io/canvas/Ch03/ex03/index.html)

程式碼：

[https://gitlab.com/GQSM/canvas/blob/master/Ch03/ex03/index.js](https://gitlab.com/GQSM/canvas/blob/master/Ch03/ex03/index.js)

### 紀錄及調閱畫布狀態
---
1. 紀錄畫布的當前狀態
    ```javascript
    ctx.save()
    ```
2. 改變畫布的基準點，並繪製一個圓形
    ```javascript
    ctx.translate(100,100)
    ctx.beginPath()
    ctx.arc(0,0,10,0,Math.PI*2)
    ctx.stroke()
    ```
3. 將畫布放大，並在原位置繪製相同的紅色圓形
    ```javascript
    ctx.scale(2,2)
    ctx.beginPath()
    ctx.arc(0,0,10,0,Math.PI*2)
    ctx.strokeStyle = '#FF0000'
    ctx.stroke()
    ```
4. 將畫布旋轉90度，再繪製一個相同的綠色圓形
    ```javascript
    ctx.rotate(Math.PI/2)
    ctx.beginPath()
    ctx.arc(100,100,10,0,Math.PI*2)
    ctx.strokeStyle = '#00FF00'
    ctx.stroke()
    ```
5. 將畫布回復到上一次紀錄的狀態
    ```javascript
    ctx.restore()
    ```
6. 在基準點繪製一個矩形（四邊形）
    ```javascript
    ctx.strokeRect(0,0,100,100)
    ```
>>>
備註說明：
* 每次使用`ctx.save()`都會儲存當前狀態，而`ctx.restore()`會將畫布回復到上一次儲存的狀態，當反覆使用`ctx.restore()`時將會尋找上一次和上上一次`ctx.save()`儲存的紀錄直到目前的畫布為最初始狀態為止，不會再回復。
* `ctx.save()`所儲存的狀態不只是畫布的基準點、旋轉角度或大小而已，也包含了框線顏色和填滿色彩。因此在第六步繪製矩形（四邊形）時，會是以黑色線條繪製而不是第四步設置的綠色。
>>>

經上方步驟，縱使在第二到四步的過程不斷改變畫布的基準點、角度和大小，但這些改變都會因為使用`ctx.restore()`將畫布回復到第一步`ctx.save()`紀錄的畫布狀態，結果可由以下頁面查閱：

[https://gqsm.gitlab.io/canvas/Ch03/ex04/index.html](https://gqsm.gitlab.io/canvas/Ch03/ex04/index.html)

程式碼：

[https://gitlab.com/GQSM/canvas/blob/master/Ch03/ex04/index.js](https://gitlab.com/GQSM/canvas/blob/master/Ch03/ex04/index.js)