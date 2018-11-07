## Ch04 基礎動畫

### 基礎動畫-移動的矩形（四邊形）
---
1. 建立一個變數`x`，並指派為0
    ```javascript
    let x = 0
    ```
2. 製作一個`function`名字是`draw`
    ```javascript
    function draw(){

    }
    ```
3. 清空`canvas`上的所有繪製圖形
    ```javascript
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ```
>>>
備註說明：
* 上方`clearRect()`的最後兩個參數為範圍，將`x`和`y`軸指定為和整個`canvas`畫布的寬高相等，等於清空畫布上的所有繪製。
>>>
4. 在`draw`中繪製一個矩形（四邊形）
    ```javascript
    ctx.strokeRect(x,0,100,100)
    ```
>>>
備註說明：
* 目前`x`被指派為0，因此上方的位置`(x,0)`就是`(0,0)`
>>>
5. `draw`的最後將`x`增加1
    ```javascript
    x = x + 1
    ```
6. 在`draw`外設置讓`draw`每10毫秒重新繪製一次
    ```javascript
    setInterval(draw, 10)
    ```
>>>
備註說明：
* `setInterval()`中帶有兩個參數
    * 第一個為要執行的`function`。
    * 第二個為間隔多久執行一次，單位為毫秒，1000毫秒換算為1秒。
* 動畫的原理是由多張連續圖片快速翻閱造成視覺殘留的效果，感覺畫面似乎動起來了。上方程式流程就是利用了這個概念
    * `draw`內的第一步將畫布清空，像翻到新的一頁。
    * 繪製一個在`(x,0)`上的矩形（四邊形），為新頁面的圖像。
    * 將`x`的值加上1，讓每次繪製矩形（四邊形）的位置都會向右移動1，繪製上一張不同的些微變化，形成連續圖片。
    * 使用`setInterval()`設置每10豪秒執行一次以上三步驟，形成動畫。
>>>

經上方步驟，頁面上會不停繪製由左向右移動的矩形（四邊形），結果可由以下頁面查閱：

[https://gqsm.gitlab.io/canvas/Ch04/ex01/index.html](https://gqsm.gitlab.io/canvas/Ch04/ex01/index.html)

程式碼：

[https://gitlab.com/GQSM/canvas/blob/master/Ch04/ex01/index.js](https://gitlab.com/GQSM/canvas/blob/master/Ch04/ex01/index.js)

### 基礎動畫-衛星公轉
---
1. 建立一個變數`t`
    ```javascript
    let t = 0
    ```
2. 製作一個`function`，名字叫做`draw`
    ```javascript
    function draw(){

    }
    ```
3. 在`draw`內先儲存當前畫布，並清空畫布
    ```javascript
    ctx.save()
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ```
4. 將畫布基準點移動至正中間
    ```javascript
    ctx.translate(canvas.width/2,canvas.height/2)
    ```
>>>
備註說明：
* 畫布`x`軸的一半長度就是中間的位置，`y`軸同理，因此基準點移動到兩軸長度除2後就是畫布中心。
>>>
5. 繪製兩個圓形，一個內圓一個外圓
    ```javascript
    ctx.beginPath()
    ctx.arc(0,0,100,0,Math.PI*2)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(0,0,250,0,Math.PI*2)
    ctx.stroke()
    ```
6. 將畫布旋轉`t`度
    ```javascript
    ctx.rotate(t/360 * Math.PI*2)
    ```
>>>
備註說明：
* 在`canvas`中角度必須以`Math.PI`表示。因此將目前角度`t`除上一圈360度，再乘上`Math.PI`的兩倍也就是360度，兩個360度抵銷後，就能得到`canvas`懂的`Math.PI`格式。
>>>
7. 在距離圓心`x`軸250單位的地方繪製圓形
    ```javascript
    ctx.beginPath()
    ctx.arc(250,0,50,0,Math.PI*2)
    ctx.stroke()
    ```
>>>
備註說明：
* 距離250是外圓的半徑。因此該圓圓心剛好會繪製在線上。
>>>
8. 繪製完後將角度`t`增加1
    ```javascript
    t = t + 1
    ```
9. `draw`的最後復原上面對畫布做的變動
    ```javascript
    ctx.restore()
    ```
10. 在`draw`外設置讓`draw`每10毫秒重新繪製一次
    ```javascript
    setInterval(draw,10)
    ```

經上方步驟，頁面上會不停繪製沿著外圈軌跡繞著內圈轉的圓，結果可由以下頁面查閱：

[https://gqsm.gitlab.io/canvas/Ch04/ex02/index.html](https://gqsm.gitlab.io/canvas/Ch04/ex02/index.html)

程式碼：

[https://gitlab.com/GQSM/canvas/blob/master/Ch04/ex02/index.js](https://gitlab.com/GQSM/canvas/blob/master/Ch04/ex02/index.js)