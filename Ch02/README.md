## Ch02 繪製樣式

>>>
使用須知：
* 指定顏色接可使用以下三種方式，本節將不再另外說明
    * CSS表示法，例如`red`([參考網址](https://www.w3schools.com/cssref/css_colors.asp))
    * 十六進位表示法，例如`#FF0000`
    * RGB表示法，例如`rgb(255,0,0)`
    * RGBA表示法，例如`rgba(255,0,0,1)`
        * `RGBA`最後一個`A`的數值為透明度，範圍從1（完全不透明）到0（完全透明）
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
1. 使用`RGBA`表示法，以`A`的數值設置該線條或填色
```javascript
ctx.fillRect(50,50,200,200)
ctx.fillStyle = 'rgba(255,0,0,0.4)'
ctx.fillRect(100,100,200,200)
```
經上方步驟，canvas將會繪製一個不透明的黑色及透明的紅色矩形（四邊形），結果可由以下頁面查閱：

[https://gqsm.gitlab.io/canvas/Ch02/ex05/index.html](https://gqsm.gitlab.io/canvas/Ch02/ex05/index.html)

程式碼：

[https://gitlab.com/GQSM/canvas/blob/master/Ch02/ex05/index.js](https://gitlab.com/GQSM/canvas/blob/master/Ch02/ex05/index.js)

