function squareDigits(num){
  let chars = num.toString().split("");
  let newNum = "";
  for (let i = 0; i < chars.length; i++){
    let squaredNum = parseInt(chars[i]) * parseInt(chars[i]);
    newNum += squaredNum.toString();
  }
  return parseInt(newNum);
}