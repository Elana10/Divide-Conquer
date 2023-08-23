function findRotationCount(arr) {
    let leftIdx = 0
    let rightIdx = arr.length-1

    while(leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx)/2)

        if(leftIdx === rightIdx){
            return middleIdx
            }

        if(arr[leftIdx] <= arr[middleIdx]){
            if(arr[leftIdx] < arr[rightIdx]){
                rightIdx = Math.max(middleIdx - 1, 0)
            } else {
                leftIdx = middleIdx + 1
            }
        } else {
            leftIdx = middleIdx
        }

    }
}

module.exports = findRotationCount