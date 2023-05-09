function cariModus(data) {
  let mode = 0;
  let jumlah = 0;

  for (let i = 0; i < data.length; i++) {
    let temp = 0;
    for (let j = 0; j < data.length; j++) {
      if (data[i] === data[j]) {
          temp++;
      }
    }

    if (temp > jumlah) {
      mode = data[i];
      jumlah = temp;
    }
  }

  if (jumlah === 1) {
    return -1; // jika tidak ada modus, kembalikan -1
  } else {
    return mode;
  }
}


let data1 = [10, 4, 5, 2, 4];
let data2 = [5, 10, 10, 6, 5];
let data3 = [10, 3, 1, 2, 5];
let data4 = [1, 2, 3, 3, 4, 5];
let data5 = [7, 7, 7, 7, 7];
console.log('Modus data1: ', cariModus(data1));
console.log('Modus data2: ', cariModus(data2));
console.log('Modus data3: ', cariModus(data3));
console.log('Modus data4: ', cariModus(data4));
console.log('Modus data5: ', cariModus(data5));