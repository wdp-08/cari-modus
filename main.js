function cariModus(arr) {
  let modus = -1;
  let max = 0;
  
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        count++;
      }
    }
    
    if (count > max) {
      modus = arr[i];
      max = count;
    }
  }
  
  if (max === 1 || max === arr.length) {
    modus = -1;
  }
  
  return modus;
}

console.log(cariModus([10, 4, 5, 10, 10])); 
console.log(cariModus([6, 10, 10, 6, 5])); 
console.log(cariModus([9, 3, 1, 2, 5])); 
console.log(cariModus([1, 2, 3, 3, 4, 5])); 
console.log(cariModus([5, 5, 5, 5, 5])); 