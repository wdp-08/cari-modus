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


let data = [10, 4, 5, 2, 4];
console.log('Modus data: ', cariModus(data));