var nums1 = [2]
var nums2 = []

var findMedianSortedArrays1 = function (nums1, nums2) {
  var nums = []
  var length = nums1.length + nums2.length
  var median = Math.floor((length + 1) / 2) - 1
  console.log(median)

  for (var i = 0, j = 0, k = 0; k <= median + 1; k++) {
    if (nums1[i] === undefined && nums2[j] !== undefined) {
      nums.push(nums2[j++])
      continue
    }
    if (nums2[j] === undefined && nums1[i] !== undefined) {
      nums.push(nums1[i++])
      continue
    }
    if (nums1[i] < nums2[j]) {
      nums.push(nums1[i++])
    } else {
      nums.push(nums2[j++])
    }
  }
  if (length % 2 === 0) {
    return (nums[median] + nums[median + 1]) / 2
  }
  return nums[median]
}

var findMedianSortedArrays = function (nums1, nums2) {
  var length = nums1.length + nums2.length
  var median = Math.floor((length + 1) / 2) - 1
  var left, right

  for (var i = 0, j = 0, k = 0; k <= median + 1; k++) {
    if (nums1[i] === undefined && nums2[j] !== undefined) {
      j++
      continue
    }
    if (nums2[j] === undefined && nums1[i] !== undefined) {
      i++
      continue
    }
    if (nums1[i] < nums2[j]) {
      i++
    } else {
      j++
    }
  }
}

console.log(findMedianSortedArrays(nums1, nums2))
