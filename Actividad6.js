function isPalindrome(str) {
    str = str.replace(/\s+/g, '').toLowerCase(); 
    if (str.length <= 1) {
      return true; 
    }
    if (str[0] !== str[str.length - 1]) {
      return false; 
    }
    return isPalindrome(str.slice(1, str.length - 1)); 
  }
  
  console.log(isPalindrome("racecar")); 
  console.log(isPalindrome("hello")); 
  console.log(isPalindrome("A man a plan a canal Panama"));
  