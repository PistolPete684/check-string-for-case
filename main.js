function solve(s){
  // Create a new array of only lower case letters and only uppercase letters using match and RegEx
  // Then set the count of each new array as a variable 
  let upperCaseCount = (s.match(/[A-Z]/g) || []).length;
  let lowerCaseCount = (s.match(/[a-z]/g) || []).length;
  // Setup and if statement that checks if there is more upper case letters
  // If so, it turns the entire string to upper case letters
  if (upperCaseCount > lowerCaseCount) {
    return s.toUpperCase();
  // If it's equal or more lower case letters, it turns the string to all lower case letters
  } else {
    return s.toLowerCase();
  }
  
}