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
  twoSum: `const sum = sumFoo([8, 0, 3, 2, 4], 10)
console.log(sum)`,
findMedianSortedArrays: `console.time()
const nums1 = [-4, -1, 0, 2, 2, 3, 9], nums2 = [3, 4, 4, 8, 9]
const result = findMedianSortedArrays(nums1, nums2)
console.log(result)
console.timeEnd()`,
longestPalindrome: `console.time()
const s = longestPalindrome('ababc')
console.log(s)
console.timeEnd()`
}

export default codemap