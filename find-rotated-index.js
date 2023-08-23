function findRotatedIndex(arr, val) {
    let leftIdx = 0
    let rightIdx = arr.length-1

    while(leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx)/2)
        let middleVal = arr[middleIdx]

        if(middleVal === val){
            return middleIdx
        }

        if (arr[leftIdx] <= arr[middleIdx]) {
            if (val >= arr[leftIdx] && val < arr[middleIdx]) {
                rightIdx = middleIdx - 1;
            } else {
                leftIdx = middleIdx + 1;
            }
        } else {
            if (val > arr[middleIdx] && val <= arr[rightIdx]) {
                leftIdx = middleIdx + 1;
            } else {
                rightIdx = middleIdx - 1;
            }
        }
    }
    return -1
  
}

module.exports = findRotatedIndex