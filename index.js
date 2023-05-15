function cariModus(arr) {
  let modus = -1; // nilai default jika tdk ada modus ditemukan
  let maxCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count > maxCount && count > 1) {
      maxCount = count;
      modus = arr[i];
    }
  }

  return modus;
}

console.log(cariModus([10, 4, 5, 2, 4]));
console.log(cariModus([5, 10, 10, 6, 5]));
console.log(cariModus([10, 3, 1, 2, 5]));
console.log(cariModus([1, 2, 3, 3, 4, 5]));
console.log(cariModus([7, 7, 7, 7, 7]));
