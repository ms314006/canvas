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
幾過上方五個步驟，canvas將會繪製出以下線條，可由以下頁面查閱：
[https://gqsm.gitlab.io/canvas/Ch01/ex01/index.html](https://gqsm.gitlab.io/canvas/Ch01/ex01/index.html)

