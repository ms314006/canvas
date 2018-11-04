## Ch01 基本繪圖方式

### canvas起手式
1. 在HTML頁面的<body>中標記<canvas>標籤
    ```html
    <html>
        <body>
            <canvas id="myCanvas"></canvas>
        </body>
    </html>
    ```
2. 在JavaScript中取得canvas元件
   ```javascript
   let canvas = document.getElementById('myCanvas')
   ```
3. 1