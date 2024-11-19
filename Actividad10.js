function generatePermutations(str) {
    if (str.length === 1) {
      return [str]; 
    }
    const permutations = [];
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const remainingChars = str.slice(0, i) + str.slice(i + 1);
      const remainingPerms = generatePermutations(remainingChars);
      for (let perm of remainingPerms) {
        permutations.push(char + perm);
      }
    }
    return permutations;
  }
  
  console.log(generatePermutations("abc"));