function createPhoneNumber(numbers){
    let totalLen = 14;
    let newArr = [];
    let count = 0;
    let str = "";
    for (let i = 0; i < totalLen - 1; i++){
      if (i === 0) {
        newArr.push("(");
        newArr.push(numbers[count]);
        count++;
      } else if (i === 3) {
        newArr.push(")");
      } else if (i === 4) {
        newArr.push(" "); 
      } else if (i === 8) {
        newArr.push("-");
      } else {
        newArr.push(numbers[count]);
        count++;
      }
    }
    return newArr.join("");
  }