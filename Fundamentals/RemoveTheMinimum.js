//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
//Don't change the order of the elements that are left.

function removeSmallest(numbers) {
    if (numbers.length === 0 || numbers.length === 1) {
      return [];
    }
    let newArr = numbers.slice();
    let smallestNum = [...newArr].sort((a,b) => a - b)[0];
    
    for (let i = 0; i < numbers.length; i++) {
      console.log(newArr)
      if(newArr[i] === smallestNum) {
        newArr.splice(i, 1);
        break;
      }
    }
    
    return newArr;
  }