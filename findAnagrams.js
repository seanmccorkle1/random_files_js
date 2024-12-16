var findAnagrams = function (string, letters) {
    // store the anagram characters in neededKjChars object

    const startIndicesOfAnagrams = [];
    const neededLettersObj = {};

    // populate neededChars to contain every char in p as a key and how many times that char appears in p as its value.

    for (const letter of letters) {
        if (letter in neededLettersObj) {
            neededLettersObj[letter] += 1;
        }

        // init to 1 if it doesnt exist yet
        else if (!(letter in neededLettersObj)) {
            neededLettersObj[letter] = 1;
        }
    }

    // initialize window pointers and the total number of chars needed to form an anagram.

    let leftIndex = 0;
    let rightIndex = 0;

    let count = letters.length;

    // start sliding the window, if the current char is found in p and is currently needed (meaning that its value in neededChars is bigger than 0), then decrease the count which is the total number of chars that are needed and that still haven't been found.

    while (rightIndex < string.length) {
        if (neededLettersObj[string[rightIndex]] >= 1) {
            count -= 1;
        }

        // decrease the needed amount for the current char and
        // move the window's right end one step forward.

        neededLettersObj[string[rightIndex]] -= 1;
        rightIndex += 1;

        // if the count is 0, this means that there is an anagram starting at leftIndex,
        // so push leftIndex into the output array

        if (count == 0) {
            startIndicesOfAnagrams.push(leftIndex);
        }

        // at first, the window will increase its length by taking steps forward with its right end.
        // after the window length reaches p's length for the first time,
        // the window will start moving forward like a caterpillar with the left end moving first.

        // if the char left behind was a needed char, increase the total number of chars currently needed to form an anagram.

        if (rightIndex - leftIndex == letters.length) {
            if (neededLettersObj[string[leftIndex]] >= 0) {
                count += 1;
            }

            // the lines below are the most important to understand:
            // every time a needed char is left behind (outside the window) as the window moves forward to search the rest of the string,

            // increment that char's value in the neededChars object (restore the need for that char for the window's future reference).

            neededLettersObj[string[leftIndex]] += 1;
            leftIndex += 1;
        }
    }

    return startIndicesOfAnagrams;
};

console.log(
    findAnagrams("cbaebabacd", "abc"),
    [0, 6],
    "`cba` starts at index 0 and is an anagram of `abc`, `bac` starts at index 6 "
);
