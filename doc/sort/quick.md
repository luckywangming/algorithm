# 快速排序

![快速排序](../../images/quick.gif)

- CANVAS动图预览 http://codding.cn/quickSort/ [@摘星fy 算法可视化er 提供](https://github.com/kingAnyWHere)

```
  /**
  * 快速排序
  * @method quickSort
  * @for 
  * @param @param {Array} {数组}
  * @return {Array} 排序结果
  */
  const quickSort = (arr) => {
    if (!arr) return "数组为空"
    if (arr.length <= 1) return arr

    let midIndex = Math.floor(arr.length / 2)
    let midNum = arr.splice(midIndex, 1)[0];

    let left = []
    let right = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= midNum) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return quickSort(left).concat([midNum], quickSort(right))
  }
```

- ES6写法

```
let qsort = fn => ([x, ...xn]) => x == null ? []
  : [
    ...qsort(fn)(xn.filter(a => fn(a, x))),
    x,
    ...qsort(fn)(xn.filter(a => !fn(a, x)))
  ]
```
