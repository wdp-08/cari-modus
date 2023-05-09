function cariModus(arr) {
  // write your code here
    let modus;
    let countModus = 0;
    for (let i = 0; i < arr.length; i++) {
        count = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i !== j) {
                count++;
                if (count > countModus) {
                    countModus = count;
                    modus = i;
                }
            }
        }
    }
    if (countModus === arr.length - 1) {
        return -1;
    }
    if (countModus === 0) {
        return -1;
    }
    return arr[modus];
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])) // 4
console.log(cariModus([70, 50, 10, 50, 70])) // 70
console.log(cariModus([10, 3, 1, 2, 5])) // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])) // 3
console.log(cariModus([7, 7, 7, 7, 7])) // -1
