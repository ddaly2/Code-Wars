function reverseWords(str) {
  let newStr = [];
  let letters = str.split("");
  let words = str.split(" ");
  let spaceIndexes = [];
  
  letters.forEach((letter, index) => {
    if(letter === " "){
      spaceIndexes.push(index);
    }
  })
  
  for (let i = 0; i < words.length; i++){
    let reverseWord = "";
    for (let j = words[i].length - 1; j >= 0; j--) {
      reverseWord += words[i][j];
    }
    newStr.push(reverseWord);
  }
  
  newStr = newStr.join(" ");
  return newStr;
}
