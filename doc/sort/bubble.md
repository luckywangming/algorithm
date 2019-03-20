# 冒泡排序

```
  /**
  * 冒泡排序
  * @method bubbleSort
  * @for 
  * @param {Array,Function} {数组,控制升序降序(a,b) => a - b}
  * @return {Array} 排序结果
  */
  const bubbleSort = (arr, fn) => {
    let count = 0
    fn = fn || ((a, b) => a - b) //默认升序
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (fn(arr[j], arr[j + 1]) > 0) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
          count++
        }
      }
      if (count == 0) { //如果为有序序列，跳出循环
        break
      }
    }
    return arr
  }
```
