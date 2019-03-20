const arr = [1, 4, 5, 6, 7, 2, 4, 3, 6, 9, 12, 33, -1]
// const arr = [1, 2, 3, 4, 5, 6]
/**
 * 冒泡排序
 * @method bubbleSort
 * @for 
 * @param {Array,Function} {数组,控制升序降序(a,b) => a - b}
 * @return {Array} 排序结果
 */
const bubbleSort = (arr, fn) => {
  if (!arr) return "数组为空"
  if (arr.length == 1) return arr

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

/**
 * 选择排序
 * @method selectionSort
 * @for 
 * @param @param {Array,Function} {数组,控制升序降序(a,b) => a - b}
 * @return {Array} 排序结果
 */
const selectionSort = (arr, fn) => {
  if (!arr) return "数组为空"
  if (arr.length == 1) return arr

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

/**
 * 快速排序
 * @method quickSort
 * @for 
 * @param @param {Array,Function} {数组,控制升序降序(a,b) => a - b}
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
let qsort = fn => ([x, ...xn]) => x == null ? []
  : [
    ...qsort(fn)(xn.filter(a => fn(a, x))),
    x,
    ...qsort(fn)(xn.filter(a => !fn(a, x)))
  ]
document.write(quickSort(arr))
