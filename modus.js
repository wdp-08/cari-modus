function cariModus(arr) {
  // write your code here
  let counts = {}; // Objek untuk menyimpan jumlah kemunculan setiap angka

  for (let num of arr) {
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  }

  let maxCount = 0;
  let modus = -1;

  for (let num in counts) {
    if (counts[num] > maxCount) {
      maxCount = counts[num];
      modus = num;
    } else if (counts[num] === maxCount && modus === -1) {
      modus = num;
    }
  }

  if (maxCount === 1 || modus === -1) {
    return -1;
  } else {
    return modus;
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])) // 4
console.log(cariModus([5, 10, 10, 6, 5])) // 5
console.log(cariModus([10, 3, 1, 2, 5])) // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])) // 3
console.log(cariModus([7, 7, 7, 7, 7])) // -1
