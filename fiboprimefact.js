// Factorial

const factorial = num => num<= 1 ? 1 : num * factorial(num - 1);

// Example usage:
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1

// Fibonacci

const generateFibonacci = n => {
  const seq;
  if (n <= 0) return [];
  if (n === 1) return;
  while (seq.length < n) seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
  return seq;
};

// Example usage:
console.log(generateFibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]

//Prime 

const isPrime = n => {
  if (n <= 1) return false;
  for (let i = 2, sqrt = Math.sqrt(n); i <= sqrt; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// Example usage:
console.log(isPrime(11)); // Output: true
console.log(isPrime(4));  // Output: false
