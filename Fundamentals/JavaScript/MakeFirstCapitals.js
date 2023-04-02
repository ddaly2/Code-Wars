//Create a custom string method to capilatize the first letter of each word in a string 
//like Jaden Smith does on Twitter

String.prototype.toJadenCase = function () {
    return this.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
  };