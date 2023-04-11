function rowSumOddNumbers(n) {
    if(n === 1) return 1;
    
    let countBefore = 0;
    let rowCount = 0;
    let rowSum = 0;
    
    for (let i = n - 1; i >= 1; i--){
      countBefore += i;
    }
    
    let start = (countBefore * 2) + 1;
    while(true) {
      
      if (rowCount === n) {
        return rowSum;
      }
      
      rowSum += start;
      start += 2;
      rowCount++;
    }
  }