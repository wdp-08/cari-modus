function cariModus(arr) {
    const frequeryTable = {};
    arr.forEach(elem => frequeryTable[elem] = frequeryTable[elem] + 1 || 1);
  
    let modes = [];
    let maxFrequency = 0;
    for (const key in frequeryTable) {
      if (frequeryTable[key] > maxFrequency) {
        modes = [Number(key)];
        maxFrequency = frequeryTable[key];
      } 
      else if (frequeryTable[key] === maxFrequency) {
        modes.push(Number(key));
      }
    }
    if (modes.length === Object.keys(frequeryTable).length) modes = [];
  
    return modes;
  }
  
   // TEST CASES
  const data = [10, 4, 5, 2, 4];
  const data2 = [5, 10, 10, 6, 5];
  const data3 = [10, 3, 1, 2, 5];
  const data4 = [1, 2, 3, 3, 4, 5];
  const data5 = [7, 7, 7, 7, 7];
 
  console.log(`Modus: ${cariModus(data)}`);
  console.log(`Modus: ${cariModus(data2)}`);
  console.log(`Modus: ${cariModus(data3)}`);
  console.log(`Modus: ${cariModus(data4)}`);
  console.log(`Modus: ${cariModus(data5)}`);