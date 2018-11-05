## Ch01 基本繪圖方式

### canvas起手式
---

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
>>>
使用須知：
* `canvas`中的座標值與一般座標的Y軸相反，頁面最上方的Y軸座標為0，越向下座標數值越大 ; Ｘ座標則是相同，頁面坐左邊的座標為0，數值向右遞增。
>>>

### 畫線

---

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
4. 將路徑畫上線條
    ```javascript
    ctx.stroke()
    ```
經上方步驟，canvas將會繪製線條，結果可由以下頁面查閱：

[https://gqsm.gitlab.io/canvas/Ch01/ex01/index.html](https://gqsm.gitlab.io/canvas/Ch01/ex01/index.html)

程式碼：

[https://gitlab.com/GQSM/canvas/blob/master/Ch01/ex01/index.js](https://gitlab.com/GQSM/canvas/blob/master/Ch01/ex01/index.js)

### 多邊形

---

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
經上方步驟，canvas將會圖形並填色，結果可由以下頁面查閱：

[https://gqsm.gitlab.io/canvas/Ch01/ex02/index.html](https://gqsm.gitlab.io/canvas/Ch01/ex02/index.html)

程式碼：

[https://gitlab.com/GQSM/canvas/blob/master/Ch01/ex02/index.js](https://gitlab.com/GQSM/canvas/blob/master/Ch01/ex02/index.js)

### 矩形（四邊形）

---

1. `canvas`能使用現有的函式繪製矩形（四邊形）
    ```javascript
    ctx.strokeRect(100,100,250,500)
    ```

>>>
備註說明：
* `strokeRect()`帶有四個參數
    * 前兩個為繪製座標，會以矩形的左上角會對齊。
    * 後兩個數值分別為矩形的寬和高。
* 下方的`fillRect()`及`clearRect()`的對應參數也是同樣的作用。
>>>

2. 繪製填滿的矩形（四邊形）
    ```javascript
    ctx.fillRect(400,100,200,200)
    ```
3. 清除指定矩形（四邊形）範圍內所有的繪製圖案
    ```javascript
    ctx.clearRect(300,200,200,50)
    ```

經上方步驟，canvas將繪製指定矩形（四邊形），結果可由以下頁面查閱：

[https://gqsm.gitlab.io/canvas/Ch01/ex03/index.html](https://gqsm.gitlab.io/canvas/Ch01/ex03/index.html)

程式碼：

[https://gitlab.com/GQSM/canvas/blob/master/Ch01/ex03/index.js](https://gitlab.com/GQSM/canvas/blob/master/Ch01/ex03/index.js)

### 圓形

---

>>>
使用須知：
* 在`canvas`中繪製圓形並不像四邊形，他比較接近繪製圓弧線條的概念，所以在使用它時必須先用`ctx.beginPath()`初始化繪製路徑，最後再由`ctx.stroke()`將線條繪製到頁面上。
* 在JavaScript中圓周率3.14用`Math.PI`表示，而`Math.PI`在角度中也代表180度。
* `canvas`中角度的方向和一般相反，以圓心向右延伸的水平線為0度，由下開始增加度數。因此如果要在`canvas`繪製一個下半圓，就是從0度到180度，也就是`Math.PI`。
>>>

1. 在`canvas`中繪製圓形：
    ```javascript
    ctx.beginPath()
    ctx.arc(100,100,50,0,Math.PI*2)
    ctx.stroke()
    ```
>>>
備註說明：
* `ctx.arc()`帶有五個參數
    * 前兩個參數為指定繪製的圓心座標。
    * 第三個參數為指定繪製的圓形半徑。
    * 最後兩個參數為指定圓弧線條的起始角度到結束的角度。上方從0度指定到180度(`Math.PI`)就是一個完整的圓。
>>>
2. 繪製一個填滿的下半圓形：
    ```javascript
    ctx.beginPath()
    ctx.arc(300,100,50,0,Math.PI)
    ctx.closePath()
    ctx.fill()
    ```
>>>
備註說明：
* 從0度指定到180度(`Math.PI`)剛好是下半圓，但開始的點及結束的點並不會連結，所以加上`ctx.closePath()`使他相連。
>>>

經上方步驟，canvas將繪製指定圓形，結果可由以下頁面查閱：

[https://gqsm.gitlab.io/canvas/Ch01/ex04/index.html](https://gqsm.gitlab.io/canvas/Ch01/ex04/index.html)

程式碼：

[https://gitlab.com/GQSM/canvas/blob/master/Ch01/ex04/index.js](https://gitlab.com/GQSM/canvas/blob/master/Ch01/ex04/index.js) 

### 曲線
---
>>>
使用須知：
* 在`canvas`中的曲線採用「[貝茲曲線](https://zh.wikipedia.org/wiki/%E8%B2%9D%E8%8C%B2%E6%9B%B2%E7%B7%9A)」公式繪製。
* 在「貝茲曲線」中又分為「[二次方貝茲曲線](https://zh.wikipedia.org/wiki/%E8%B2%9D%E8%8C%B2%E6%9B%B2%E7%B7%9A#/media/File:B%C3%A9zier_2_big.gif)」及「[三次方貝茲曲線](https://zh.wikipedia.org/wiki/%E8%B2%9D%E8%8C%B2%E6%9B%B2%E7%B7%9A#/media/File:B%C3%A9zier_3_big.gif)」兩種方式。
>>>

#### 二次方貝茲曲線
---
1. 曲線如一般線條，需要初始化繪製線條，及指定曲線的原點
    ```javascript
    ctx.beginPath()
    ctx.moveTo(20,100)
    ```
2. 如[動畫演示](https://zh.wikipedia.org/wiki/%E8%B2%9D%E8%8C%B2%E6%9B%B2%E7%B7%9A#/media/File:B%C3%A9zier_2_big.gif)，以二次方貝茲曲線繪製需指定一個基準點座標`P1`和曲線另一端`P2`座標
    ```javascript
    ctx.quadraticCurveTo(60,0,100,100)
    ```
>>>
備註說明：
* `quadraticCurveTo()`帶有四個參數
    * 前兩個為基準點`P1`的座標。
    * 後兩個為曲線的另一端`P2`座標。
>>>

3. 將線條給繪製到`canvas`上
    ```javascript
    ctx.stroke()
    ```

經上方步驟，canvas將以「二次方貝茲曲線」繪製指定曲線，結果可由以下頁面查閱：

[https://gqsm.gitlab.io/canvas/Ch01/ex05/index.html](https://gqsm.gitlab.io/canvas/Ch01/ex05/index.html)

程式碼：

[https://gitlab.com/GQSM/canvas/blob/master/Ch01/ex05/index.js](https://gitlab.com/GQSM/canvas/blob/master/Ch01/ex05/index.js) 

#### 三次方貝茲曲線
---
1. 初始化繪製線條及指定曲線原點
    ```javascript
    ctx.beginPath()
    ctx.moveTo(20,100)
    ```
2. 如[動畫演示](https://zh.wikipedia.org/wiki/%E8%B2%9D%E8%8C%B2%E6%9B%B2%E7%B7%9A#/media/File:B%C3%A9zier_3_big.gif)，以三次方貝茲曲線繪製需指定兩個基準點座標`P1`、`P2`和曲線另一端`P3`座標
    ```javascript
    ctx.bezierCurveTo(30,0,40,20,100,100)
    ```
>>>
補充說明：
* `bezierCurveTo()`帶有六個參數
    * 前兩個參數為第一個基準點`P1`的座標。
    * 第三四個參數為第二個基準點`P2`的座標。
    * 最後兩個參數為曲線另一端的座標。
* `quadraticCurveTo()`及`bezierCurveTo()`都是繪製線條，因此可以和`arc()`及`lineTo()`連結使用，連出去的點為在函式內指定的曲線另一端座標點。
>>>
4. 承上點補充說明，將上方的曲線連接第二個`bezierCurveTo()`，並將線條繪製到`canvas`上
    ```javascript
    ctx.bezierCurveTo(170,200,190,150,200,100)
    ctx.stroke()
    ```

經上方步驟，canvas將以「三次方貝茲曲線」繪製指定曲線，結果可由以下頁面查閱：

[https://gqsm.gitlab.io/canvas/Ch01/ex06/index.html](https://gqsm.gitlab.io/canvas/Ch01/ex06/index.html)

程式碼：

[https://gitlab.com/GQSM/canvas/blob/master/Ch01/ex06/index.js](https://gitlab.com/GQSM/canvas/blob/master/Ch01/ex06/index.js) 


### 參考文章
---
* https://zh.wikipedia.org/wiki/%E8%B2%9D%E8%8C%B2%E6%9B%B2%E7%B7%9A