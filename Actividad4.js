function reverseString(str) {
    if (str === "") {
      return str; 
    }
    return reverseString(str.slice(1)) + str[0]; 
  }
  
  console.log(reverseString("hello")); 
  console.log(reverseString("abcde")); 
  