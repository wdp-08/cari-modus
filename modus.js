function cariModus(arr) {
    //membuat variabel nilai
    let arrModus = [];
    let nilaisama = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                nilaisama = true;
                arrModus.push(arr[i]);
            } else {
                nilaisama = false;
            }
        }
    }
    return (arrModus[0] === undefined || nilaisama) ? -1 : arrModus[0];
    // Setelah looping selesai, fungsi memeriksa apakah array arrModus itu kosong atau berisi sama semua
    // Jika salah satu dari kondisi tersebut benar, fungsi mengembalikan -1
    // Jika tidak, fungsi mengembalikan elemen pertama dalam array arrModus sebagai modus.

}
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); 