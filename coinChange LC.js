var coinChange = function (numCoinsArray, targetNum) {

    // This array tells us how many numCoinsArray we need for each targetNum.
    const array = Array(targetNum + 1).fill(Infinity)

    array[0] = 0 // To make 0, we need 0 numCoinsArray.

    for (let coin of numCoinsArray) { // Check each coin

        // Iterate through the entire targetNum from coin
        // Update minimum number of needed numCoinsArray.

        for (let index = coin; index <= targetNum; index++) {

            index

            const min = Math.min(array[index], array[index - coin] + 1)
            array[index] = min 
        }
    }

    // If the last element is Infinity, then we cannot make the targetNum.
    
    if (array[targetNum] == Infinity) {
        return -1
    }
    return array[targetNum]
}

console.log(coinChange([1, 2, 5], 11), 3, "1 penny, 2 nickels, total 3 numCoinsArray. 1 + (5 +5) = 11")