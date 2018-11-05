## Ch02 繪製樣式

>>>
使用須知：
* 指定顏色接可使用以下四種方式，本節將不再另外說明
    * CSS表示法，例如`red`([參考網址](https://www.w3schools.com/cssref/css_colors.asp))。
    * 十六進位表示法，例如`#FF0000`。
    * RGB表示法，例如`rgb(255,0,0)`。
    * RGBA表示法，例如`rgba(255,0,0,1)`。
        * `RGBA`最後一個`A`的數值為透明度，範圍從1（完全不透明）到0（完全透明）。
    * 十六進位表示法、RGBA表示法可參考[此網站內容](https://www.w3schools.com/colors/colors_picker.asp)。
>>>

### 線條顏色
---
1. 在繪製前指定線條顏色
    ```javascript
    ctx.beginPath()
    ctx.moveTo(20,50)
    ctx.lineTo(120,50)
    ctx.strokeStyle = '#FF0000'
    ctx.stroke()
    ```

經上方步驟，canvas將會繪製紅色線條，結果可由以下頁面查閱：

[https://gqsm.gitlab.io/canvas/Ch02/ex01/index.html](https://gqsm.gitlab.io/canvas/Ch02/ex01/index.html)

程式碼：

[https://gitlab.com/GQSM/canvas/blob/master/Ch02/ex01/index.js](https://gitlab.com/GQSM/canvas/blob/master/Ch02/ex01/index.js)

### 線條寬度
---
1. 在繪製前指定線條寬度
    ```javascript
    ctx.beginPath()
    ctx.moveTo(20,50)
    ctx.lineTo(120,50)
    ctx.lineWidth = 2
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(20,80)
    ctx.lineTo(120,80)
    ctx.lineWidth = 5
    ctx.stroke()
    ```
經上方步驟，canvas將會繪製兩條寬度不同的線條，結果可由以下頁面查閱：

[https://gqsm.gitlab.io/canvas/Ch02/ex02/index.html](https://gqsm.gitlab.io/canvas/Ch02/ex02/index.html)

>>>
備註說明：
* 可以觀察到寬度`2`的線條比較清晰，因為當座標位置剛好在`X`或`Y`軸的某一值線上時，寬度為`2`會剛好向左右填滿`1px`，也就是一格，而寬度若為`1`則會向左右會各填`0.5px`，其餘未填滿的`0.5px`則會用原本顏色淡出，為避免這個狀況，在寬度為奇數的情況座標值可設定`X.5`讓繪製線的中心落在每格中間。
>>>

程式碼：

[https://gitlab.com/GQSM/canvas/blob/master/Ch02/ex02/index.js](https://gitlab.com/GQSM/canvas/blob/master/Ch02/ex02/index.js)

### 填滿色彩
---
1. 在填滿前指定填滿色彩
    ```javascript
    ctx.fillStyle = '#FF0000'
    ctx.fillRect(50,50,100,200)
    ```

經上方步驟，canvas將會繪製紅色矩形（四邊形），結果可由以下頁面查閱：

[https://gqsm.gitlab.io/canvas/Ch02/ex03/index.html](https://gqsm.gitlab.io/canvas/Ch02/ex03/index.html)

程式碼：

[https://gitlab.com/GQSM/canvas/blob/master/Ch02/ex03/index.js](https://gitlab.com/GQSM/canvas/blob/master/Ch02/ex03/index.js)

### 透明度
---
>>>
使用須知：
* 在`canvas`中設定透明度有兩種方法
    * 一次設置全部的`globalAlpha`。
    * 個別設置繪製色彩的`rgba()`。
* 透明度的數值在1（完全不透明）到0（完全透明）之間。
>>>

### 全域設置
---
1. 經過一次設置便可套用至所有線條及填滿色彩
```javascript
ctx.globalAlpha = 0.4
ctx.fillRect(50,50,200,200)
ctx.fillStyle = '#FF0000'
ctx.fillRect(100,100,200,200)
```
經上方步驟，canvas將會繪製兩個變成半透明的黑色及紅色矩形（四邊形），結果可由以下頁面查閱：

[https://gqsm.gitlab.io/canvas/Ch02/ex04/index.html](https://gqsm.gitlab.io/canvas/Ch02/ex04/index.html)

程式碼：

[https://gitlab.com/GQSM/canvas/blob/master/Ch02/ex04/index.js](https://gitlab.com/GQSM/canvas/blob/master/Ch02/ex04/index.js)

### 個別設置
---
1. 使用`RGBA`表示法，以`A`的數值設置該線條或填色的透明度
```javascript
ctx.fillRect(50,50,200,200)
ctx.fillStyle = 'rgba(255,0,0,0.4)'
ctx.fillRect(100,100,200,200)
```
經上方步驟，canvas將會繪製一個不透明的黑色及透明的紅色矩形（四邊形），結果可由以下頁面查閱：

[https://gqsm.gitlab.io/canvas/Ch02/ex05/index.html](https://gqsm.gitlab.io/canvas/Ch02/ex05/index.html)

程式碼：

[https://gitlab.com/GQSM/canvas/blob/master/Ch02/ex05/index.js](https://gitlab.com/GQSM/canvas/blob/master/Ch02/ex05/index.js)

### 漸層
---
>>>
使用須知
* `canvas`中漸層有兩種樣式
    * 線性漸層
    * 放射性漸層
>>>

### 線性漸層
---
1. 宣告一個線性漸層物件
```javascript
let grad = ctx.createLinearGradient(0,0,0,150)
```
>>>
補充說明：
* `createLinearGradient()`擁有四個參數
    * 前兩個為漸層的起始點座標。
    * 後兩個為漸層的結束座標。
* 兩個座標連為一個線，`createLinearGradient()`會依照該線渲染漸層。
>>>
2. 增加漸層顏色
```javascript
grad.addColorStop(0, '#FFFFFF')
grad.addColorStop(1, '#FF0000')
```
>>>
補充說明：
* `addColorStop()`擁有兩個參數
    * 第一個參數指定區段長度，會比例分配`createLinearGradient()`設置的線條長度，數值在0至1之間。
    * 第二個參數指定區段顏色。
>>>
3. 將填滿色彩設定為該漸層物件，並繪製一個填滿的矩形（四邊形）
```javascript
ctx.fillStyle = grad
ctx.fillRect(10,10,200,150)
```
4. 線條顏色也可套用該漸層物件
```javascript
ctx.strokeStyle = grad
ctx.strokeRect(250,10,200,150)
```
經上方步驟，canvas將會繪製一個擁有由白至紅的漸層矩形（四邊形）及矩形（四邊形）框線，結果可由以下頁面查閱：

[https://gqsm.gitlab.io/canvas/Ch02/ex06/index.html](https://gqsm.gitlab.io/canvas/Ch02/ex05/index.html)

程式碼：

[https://gitlab.com/GQSM/canvas/blob/master/Ch02/ex06/index.js](https://gitlab.com/GQSM/canvas/blob/master/Ch02/ex06/index.js)

### 放射性漸層
---
1. 宣告一個放射型的漸層物件
```javascript
let grad = ctx.createRadialGradient(100,100,100,150,150,10)
```
>>>
* `createRadialGradient()`帶有六個參數
    * 前兩個參數為第一個圓的圓心座標位置。
    * 第三個參數為第一個圓的半徑。
    * 最後三個參數分別為第二個圓的圓心座標位置及第二個圓的半徑。
* 放射的漸層會從第一個圓的圓心往第二個圓渲染漸層
>>>
2. 增加漸層顏色
```javascript
grad.addColorStop(0, '#FFFFFF')
grad.addColorStop(1, '#FF0000')
```
>>>
補充說明：
* `addColorStop()`擁有兩個參數
    * 第一個參數指定區段長度，會比例分配`createRadialGradient()`設置的兩個圓半徑距離算出漸層長度，數值在0至1之間。
    * 第二個參數指定區段顏色。
>>>
3. 將填滿色彩設定為該漸層物件，並繪製一個填滿的矩形（四邊形）
```javascript
ctx.fillStyle = grad
ctx.fillRect(0,0,200,200)
```

經上方步驟，canvas將會繪製一個擁有由座標位置`(100,100)`半徑`100`的圓由白至紅漸層到座標位置`(150,150)`半徑`10`的圓，結果可由以下頁面查閱：

[https://gqsm.gitlab.io/canvas/Ch02/ex07/index.html](https://gqsm.gitlab.io/canvas/Ch02/ex05/index.html)

程式碼：

[https://gitlab.com/GQSM/canvas/blob/master/Ch02/ex07/index.js](https://gitlab.com/GQSM/canvas/blob/master/Ch02/ex07/index.js)
