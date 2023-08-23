function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let ans = 0

  while(leftIdx <= rightIdx){
    let middleIdx = Math.floor((leftIdx + rightIdx)/2)
    let middleVal = arr[middleIdx];

    if(middleVal === 1){
      leftIdx = middleIdx + 1
    }
    else if (middleVal === 0){
      rightIdx = middleIdx - 1
      ans = arr.length - middleIdx
    }

  }
  return ans
  
}

module.exports = countZeroes