function cariModus(arr) {
    let mode = -1;
    let count = 0;
  
    for (let i = 0; i < arr.length; i++) {
      let currentCount = 1;
  
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] === arr[i]) {
          currentCount++;
        }
      }
  
      if (currentCount > count && currentCount > 1) {
        mode = arr[i];
        count = currentCount;
      }
    }
  
    return mode;
  }

  