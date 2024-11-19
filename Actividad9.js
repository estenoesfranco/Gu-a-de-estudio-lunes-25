function contains(arr, target) {
    if (arr.length === 0) {
      return false; 
    }
    if (arr[0] === target) {
      return true; 
    }
    return contains(arr.slice(1), target); 
  }
  
  console.log(contains([1, 2, 3, 4, 5], 3)); 
  console.log(contains([10, 20, 30, 40], 25));
  