# 选择排序

![选择排序](../../images/selectionSort.gif)

- CANVAS动图预览 http://codding.cn/algo/selectionSort.html?rand [@摘星fy 算法可视化er 提供](https://github.com/kingAnyWHere)

```
  /**
  * 选择排序
  * @method selectionSort
  * @for 
  * @param @param {Array,Function} {数组,控制升序降序(a,b) => a - b}
  * @return {Array} 排序结果
  */
  const selectionSort = (arr, fn) => {
    if(!arr)return "数组为空"
    if (arr.length <= 1) return arr

    fn = fn || ((a, b) => a - b) //默认升序
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i
      for (let j = i + 1; j < arr.length; j++) {
        if (fn(arr[minIndex], arr[j]) > 0) {
          minIndex = j
        }
      }
      if (minIndex !== i) {
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
      }
    }
    return arr
  }
```
