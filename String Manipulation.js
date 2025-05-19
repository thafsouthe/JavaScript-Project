/* String Manipulation Functions*/

// Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

//Count Characters
function countCharacters(str) {
  return str.replace(/\s+/g, '').length;
}

//Capitalize Words
function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}


