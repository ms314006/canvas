## Ch01 基本繪圖方式

### canvas起手式
1. 在HTML頁面的`body`元素中標記`canvas`標籤
    ```html
    <html>
        <body>
            <canvas id="myCanvas"></canvas>
        </body>
    </html>
    ```
2. 在JavaScript中以`id`取得`canvas`元件
    ```javascript
    let canvas = document.getElementById('myCanvas')
    ```
3. 設定`canvas`繪圖介面的長寬與頁面長寬相同
    ```javascript
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
    ```
4. 宣告繪圖方式為`2D`
    ```javascript
    let ctx = canvas.getContext('2d')
    ```

---

>>>
使用須知：
* `canvas`中的座標值與一般座標的Y軸相反，頁面最上方的Y軸座標為0，越向下座標數值越大 ; Ｘ座標則是相同，頁面坐左邊的座標為0，數值向右遞增。
* `canvas`的角度計算方式也與一般相反，在`canvas`中水平線為0度，角度越往下越大，直到繞一圈回到水平線為360度。
>>>

---

### 畫線
1. 初始化線條路徑
    ```javascript
    ctx.beginPath()
    ```
2. 以座標的方式指定線的起點位置，下方由(0,0)座標開始
    ```javascript
    ctx.moveTo(0,0)
    ```
3. 以座標的方式指定移動到的位置，線條從(0,0)座標移動到(50,50)
    ```javascript
    ctx.lineTo(50,50)
    ```
4. 指定繪製線條顏色為紅色(不指定預設為黑色)
    ```javascript
    ctx.strokeStyle = '#FF0000'
    ```
5. 將路徑畫上線條
    ```javascript
    ctx.stroke()
    ```
幾過上方步驟，canvas將會繪製線條，結果可由以下頁面查閱：

[https://gqsm.gitlab.io/canvas/Ch01/ex01/index.html](https://gqsm.gitlab.io/canvas/Ch01/ex01/index.html)

---

### 多邊形
1. 以三角形為例，先指定三個點
    ```javascript
    ctx.moveTo(50,0)
    ctx.lineTo(100,100)
    ctx.lineTo(0,100)
    ```
2. 指定完後還必須使用`ctx.lineTo(50,0)`將線條連回座標(50,0)的點，才能成為一個三角形，除此之外還可以關閉路徑缺口，自動將最後一個座標和初始座標相連
    ```javascript
    ctx.closePath()
    ```
3. 繪製線條
    ```javascript
    ctx.stroke()
    ```
4. 在多邊形內填滿色彩
    ```javascript
    ctx.fill()
    ```
5. 也可在`fill()`前指定填滿的色彩顏色
    ```javascript
    ctx.fillStyle = '#FF0000'
    ctx.fill()
    ```
幾過上方步驟，canvas將會圖形並填色，結果可由以下頁面查閱：

[https://gqsm.gitlab.io/canvas/Ch01/ex02/index.html](https://gqsm.gitlab.io/canvas/Ch01/ex0ㄉ/index.html)

