//Isograms are words that have onyl unique letters, no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
    str = str.toLowerCase();
    let letters = {};
    if(str === "") return true;
    for (let i = 0; i < str.length; i++) {
      if (str[i] in letters) {
        return false;
      } letters[str[i]] = 1;
    }
    return true;
  }