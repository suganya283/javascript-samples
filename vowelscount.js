const countVowelsFilter = str => [...str].filter(c => "aeiouAEIOU".includes(c)).length;

// Example usage:
console.log(countVowelsFilter("JavaScript")); // Output: 3

const countVowelsReduce =str =>   [...str.toLowerCase()].reduce((count,
     char) =>"aeiou".includes(char) ? count + 1 : count, 0);
     console.log(countVowelsReduce("JavaScript Object")); // Output: 3
