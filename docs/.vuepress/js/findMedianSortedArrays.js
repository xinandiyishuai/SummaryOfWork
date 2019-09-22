export const findMedianSortedArrays = (nums1 = [], nums2 = []) => {
	const swap = (arr, i, j) => {
		var temp = arr[i]
		arr[i] = arr[j]
		arr[j] = temp
	}
	const insertSort = (arr = [], l = 1, r = arr.length - 1) => {
		for (; l <= r; l++) {
			let e = arr[l]
			let j = l
			for (; j > 0 && arr[j - 1] > e; j--) {
				arr[j] = arr[j - 1]
			}
			arr[j] = e
		}
		return arr
	}
	const quickSort = (arr, l = 0, r = arr.length - 1) => {
		if (r - l <= 10) {
			return arr.sort((a, b) => a - b)
		}
		if (r - l > 10 && r - l <= 30) {
			return insertSort(arr, l, r)
		}
		let randomIndex = Math.ceil(Math.random() * (r - l) + l)
		swap(arr, l, randomIndex)
		let v = arr[l],
			lt = l, //arr[l+1,...lt]
			gt = r + 1, // arr[gt,...r]
			i = l + 1 // arr[lt+1,...i]
		while (i < gt) {
			if (arr[i] < v) {
				swap(arr, i, ++lt)
				i++
			} else if (arr[i] > v) {
				swap(arr, i, --gt)
			} else {
				i++
			}
		}
		swap(arr, l, lt)
		quickSort(arr, l, lt - 1)
		quickSort(arr, gt, r)
		return arr
	}
	const arr = quickSort([...nums1, ...nums2])
	const m = ~~(arr.length / 2)
	if (arr.length % 2 === 0) {
		return (arr[m] + arr[m - 1]) / 2
	} else {
		return arr[m]
	}
}
