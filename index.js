function cariModus(array) {
    // write your code here
    let arrayModus = [], isSame = false;

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
            isSame = true;
            arrayModus.push(array[i]);
        } else {
            isSame = false;
        }
        }
    }
    return (arrayModus[0] === undefined || isSame) ? -1 : arrayModus[0];
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])) // 4
  console.log(cariModus([5, 10, 10, 6, 5])) // 5
  console.log(cariModus([10, 3, 1, 2, 5])) // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])) // 3
  console.log(cariModus([7, 7, 7, 7, 7])) // -1