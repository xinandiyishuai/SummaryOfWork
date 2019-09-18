const codemap = {
  reduce: `console.time();
const arr = (function(){
  let a = []
  for(let i = 0;i < 100000000; i++) {
  	a.push(i)
  }
  return []
}())
arr.fakeReduce(function(accumulator, currentValue, index, array) {
  return accumulator + currentValue;
}, 10);
console.timeEnd();
console.table({a: 1})
console.warn("it's not real reduce")
console.error('there is a error')`,
  twoSum: `const sumFun = (arr = [], target) => {
  const record = new Map(),
    sumArr = []
  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i]
    let f = false,
      k = undefined
    record.forEach((item, key) => {
      if (item === diff) {
        f = true
        k = key
      }
    })
    if (f) {
      sumArr.push(k, i)
    } else {
      record.set(i, arr[i])
    }
  }
  return sumArr
}
const sum = sumFun([8, 0, 3, 2, 4], 10)
console.log(sum)`
}

export default codemap