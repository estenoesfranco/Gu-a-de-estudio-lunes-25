function findMax(arr) {
    if (arr.length === 1) {
      return arr[0]; 
    }
    const maxOfRest = findMax(arr.slice(1));
    return arr[0] > maxOfRest ? arr[0] : maxOfRest; 
  }
  
  console.log(findMax([3, 5, 7, 2, 8])); 
  console.log(findMax([-10, -3, -2, -8])); 
  