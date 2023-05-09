function cariModus(arr) {
  let saveNum = {};
    let maxCount = 0;
    let modus = [];
  
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      saveNum[num] = (saveNum[num] || 0) + 1;
      if (saveNum[num] > maxCount) {
        maxCount = saveNum[num];
      }
    }
  
    for (let num in saveNum) {
        if (saveNum[num] === maxCount) {
          modus.push(num);
        }
        if (maxCount === arr.length) {
        modus = -1;
        }
    }
    return modus;   
}
    
    
  console.log(cariModus([10, 4, 5, 2, 4])); 
  console.log(cariModus([5, 10, 10, 6, 5])); 
  console.log(cariModus([10, 3, 1, 2, 5])); 
  console.log(cariModus([1, 2, 3, 3, 4, 5]));
  console.log(cariModus([7, 7, 7, 7, 7])); 