function cariModus(arr) {
  let counts = {};
  let maxCount = 0;
  let mode = [];

  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i]] === undefined) {
      counts[arr[i]] = 1;
    } else {
      counts[arr[i]]++;
    }

    if (counts[arr[i]] > maxCount) {
      maxCount = counts[arr[i]];
      mode = [arr[i]];
    } else if (counts[arr[i]] === maxCount) {
      mode.push(arr[i]);
    }
  }

  if (mode.length === Object.keys(counts).length) {
    return "Tidak ada modus";
  }

  return mode;
}

// TEST CASES 1
let data1 = [10, 4, 5, 2, 4];
let modus1 = cariModus(data1);
console.log("Modus:", modus1);

// TEST CASES 2
let data2 = [5, 10, 10, 6, 5];
let modus2 = cariModus(data2);
console.log("Modus:", modus2);

// TEST CASES 3
let data3 = [10, 3, 1, 2, 5];
let modus3 = cariModus(data3);
console.log("Modus:", modus3);

// TEST CASES 4
let data4 = [1, 2, 3, 3, 4, 5];
let modus4 = cariModus(data4);
console.log("Modus:", modus4);

// TEST CASES 5
let data5 = [7, 7, 7, 7, 7];
let modus5 = cariModus(data5);
console.log("Modus:", modus5);
