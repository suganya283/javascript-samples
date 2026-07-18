let string = 'racecar';
let reversedStringTocheck = string.split('').reverse().join('');

if (string === reversedStringTocheck)
{
    console.log('Given string is palindrome');

}else{
        console.log('Given string is not a palindrome');

}
const reverseString = str => str.split('').reverse().join('');
console.log(reverseString('Mommmy is here'));


// p[alindrome goes here]

function isPalindromeFast(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  let left = 0;
  let right = cleaned.length - 1;
  
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false; // Break early if characters don't match
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindromeFast("racecar")); // true