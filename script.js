function cariModus(arr) {
    let angkaModus = []; 
    let angkaSama = false;
    
    for (let i=0; i < arr.length; i++) {
        for (let j=i+1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                angkaSama = true;
                angkaModus.push(arr[i]);
            } else {
                angkaSama = false;
            }
        }
    }
    return (angkaModus[0] === undefined || angkaSama) ? -1 : angkaModus[0];
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1