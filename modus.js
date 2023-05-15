function cariModus(arr) {
    let length = arr.length;
    let angka = [];
    
    let angka_terbanyak = 0;
    let jumlah_terbanyak = 0;
    
    // sorting
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (arr[j + 1] < arr[j]) {
          [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        }
      }
    }
    
    for (let i = 0; i < length; i++) {
      if (arr[i] != arr[i - 1]) {
        angka.push(arr[i]);
      }
    }
    
    for (let i = 0; i < angka.length; i++) {
      let jumlah = 0;
      for (let j = 0; j < length; j++) {
        if (angka[i] == arr[j]) {
          jumlah++;
        }
      }
      if (jumlah > jumlah_terbanyak) {
        jumlah_terbanyak = jumlah;
        angka_terbanyak = angka[i];
      }
      jumlah = 0;
    }
    
    if (jumlah_terbanyak == 1 || angka.length == 1) {
      return -1;
    } else {
      return angka_terbanyak;
    }
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])) // 4
  console.log(cariModus([5, 10, 10, 6, 5])) // 5
  console.log(cariModus([10, 3, 1, 2, 5])) // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])) // 3
  console.log(cariModus([7, 7, 7, 7, 7])) // -1

