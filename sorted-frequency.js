function sortedFrequency(arr, val) {
    let ansLow = findLower(arr, val)
    let ansHigh = findUpper(arr, val)

    if(ansLow === -1 || ansHigh === -1){
        return -1
    }
    return ansHigh - ansLow + 1
}

function findLower(arr, val){
    let leftIdx = 0
    let rightIdx = arr.length -1
    let ans = -1

    while(leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx)/2)
        let middleVal = arr[middleIdx]

        if(middleVal >= val){
            rightIdx = middleIdx - 1
            if(arr[middleIdx - 1] === undefined){
                ans = 0 
            }
        }

        if(middleVal < val){
            if(arr[middleIdx + 1] >= val){
                ans = middleIdx + 1
            }
            leftIdx = middleIdx + 1
        }
    }
    return ans
}

function findUpper(arr, val){
    let leftIdx = 0
    let rightIdx = arr.length - 1
    let ans = -1

    while(leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx+rightIdx)/2)
        let middleVal = arr[middleIdx]

        if(middleVal <= val){
            leftIdx = middleIdx + 1
            if(arr[middleIdx + 1] === undefined){
                ans = arr.length - 1
            }
        }

        if(middleVal > val){
            rightIdx = middleIdx -1
            if(arr[middleIdx -1] <= val){
                ans = middleIdx -1 
            }
        }
    }
    return ans
    }
    

module.exports = sortedFrequency