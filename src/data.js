// src/data.js

/**
 * This object contains problems and their respective solutions.
 * Each problem has multiple solutions demonstrating different approaches.
 */
export const problems = {
  arrays: [
    {
      title: "Find Maximum in Array",
      solutions: {
        bruteForce: {
          code: `
/**
 * Finds the maximum value in an array using a brute-force approach.
 * 
 * @param {number[]} arr - The array of numbers.
 * @returns {number} The maximum value in the array.
 */
function findMaxBruteForce(arr) {
  // Assume the first element is the maximum
  let max = arr[0];

  // Iterate through the rest of the array
  for (let i = 1; i < arr.length; i++) {
    // Update the maximum if a larger value is found
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  // Return the maximum value found
  return max;
}
          `,
          explanation: `
The brute-force approach involves iterating through each element of the array and keeping track of the maximum value found. This method is simple but has a time complexity of O(n), where n is the number of elements in the array. This means the time it takes to find the maximum grows linearly with the number of elements.
          `,
        },
        optimal: {
          code: `
/**
 * Finds the maximum value in an array using the built-in Math.max function.
 * 
 * @param {number[]} arr - The array of numbers.
 * @returns {number} The maximum value in the array.
 */
function findMaxOptimal(arr) {
  // Use the built-in Math.max function to find the maximum value
  return Math.max(...arr);
}
          `,
          explanation: `
The optimal approach leverages JavaScript's built-in Math.max function, which is highly optimized. This method is more concise and uses built-in methods for efficiency, with a time complexity of O(n) similar to the brute-force approach but often performs faster in practice due to optimizations in the underlying implementation.
          `,
        },
        pattern: {
          code: `
/**
 * Finds the maximum value in an array using the reduce method.
 * 
 * @param {number[]} arr - The array of numbers.
 * @returns {number} The maximum value in the array.
 */
function findMaxPattern(arr) {
  // Use the reduce method to find the maximum value
  return arr.reduce((max, num) => num > max ? num : max, arr[0]);
}
          `,
          explanation: `
The pattern-based approach uses the reduce method to iterate through the array and compare each element with the current maximum. This method is functional and elegant, with a time complexity of O(n). It is useful for understanding functional programming concepts and is often used in modern JavaScript.
          `,
        },
      },
    },
    {
      title: "Rotate Array",
      solutions: {
        bruteForce: {
          code: `
/**
 * Rotates the array by k positions using a brute-force approach.
 * 
 * @param {number[]} arr - The array of numbers.
 * @param {number} k - The number of positions to rotate.
 * @returns {number[]} The rotated array.
 */
function rotateArrayBruteForce(arr, k) {
  const n = arr.length;
  k = k % n; // Handle cases where k > n
  let temp = arr.slice(0, n - k); // Store the part of the array that will be moved
  for (let i = 0; i < k; i++) {
    arr[i] = arr[n - k + i]; // Move the last k elements to the beginning
  }
  for (let i = 0; i < n - k; i++) {
    arr[k + i] = temp[i]; // Move the remaining elements to their new positions
  }
  return arr;
}
          `,
          explanation: `
The brute-force approach involves rotating the array by manually moving elements around. This method handles rotations by slicing and rearranging elements but can be less efficient for large arrays due to multiple operations. It has a time complexity of O(n), where n is the number of elements in the array.
          `,
        },
        optimal: {
          code: `
/**
 * Rotates the array by k positions using a more efficient approach.
 * 
 * @param {number[]} arr - The array of numbers.
 * @param {number} k - The number of positions to rotate.
 * @returns {number[]} The rotated array.
 */
function rotateArrayOptimal(arr, k) {
  const n = arr.length;
  k = k % n; // Handle cases where k > n
  return [...arr.slice(-k), ...arr.slice(0, -k)];
}
          `,
          explanation: `
The optimal approach uses slicing and concatenation to rotate the array. This method is concise and leverages JavaScript's array manipulation capabilities, with a time complexity of O(n). It is efficient and takes advantage of built-in methods for simplicity.
          `,
        },
        pattern: {
          code: `
/**
 * Rotates the array by k positions using the Greatest Common Divisor (GCD) method.
 * 
 * @param {number[]} arr - The array of numbers.
 * @param {number} k - The number of positions to rotate.
 * @returns {number[]} The rotated array.
 */
function rotateArrayPattern(arr, k) {
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  const n = arr.length;
  k = k % n;
  const d = gcd(n, k); // Number of elements to rotate in each cycle
  for (let i = 0; i < d; i++) {
    let temp = arr[i];
    let j = i;
    while (true) {
      let l = (j + k) % n;
      if (l === i) break;
      arr[j] = arr[l];
      j = l;
    }
    arr[j] = temp;
  }
  return arr;
}
          `,
          explanation: `
The pattern-based approach utilizes the Greatest Common Divisor (GCD) to determine the number of positions to shift elements. This method minimizes the number of moves and is efficient for large arrays, with a time complexity of O(n). It is more advanced and helps in understanding the concept of cycle rotation.
          `,
        },
      },
    },
  ],
  strings: [
    {
      title: "Reverse String",
      solutions: {
        bruteForce: {
          code: `
/**
 * Reverses a string using a brute-force approach.
 * 
 * @param {string} str - The string to be reversed.
 * @returns {string} The reversed string.
 */
function reverseStringBruteForce(str) {
  let reversed = '';
  // Iterate from the end to the beginning
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; // Build the reversed string
  }
  return reversed;
}
          `,
          explanation: `
The brute-force approach builds the reversed string by concatenating characters from the end to the beginning. This method is straightforward but less efficient due to repeated string concatenation operations, resulting in a time complexity of O(n^2), where n is the length of the string.
          `,
        },
        optimal: {
          code: `
/**
 * Reverses a string using built-in methods.
 * 
 * @param {string} str - The string to be reversed.
 * @returns {string} The reversed string.
 */
function reverseStringOptimal(str) {
  return str.split('').reverse().join(''); // Split, reverse, and join the string
}
          `,
          explanation: `
The optimal approach uses JavaScript's built-in methods: split, reverse, and join. This method is more efficient and concise, with a time complexity of O(n). It leverages native methods for simplicity and performance.
          `,
        },
        pattern: {
          code: `
/**
 * Reverses a string using a two-pointer technique.
 * 
 * @param {string} str - The string to be reversed.
 * @returns {string} The reversed string.
 */
function reverseStringPattern(str) {
  const arr = Array.from(str); // Convert string to array of characters
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    // Swap characters from both ends
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  return arr.join(''); // Convert array back to string
}
          `,
          explanation: `
The pattern-based approach uses a two-pointer technique to swap characters in place. This method has a time complexity of O(n) and a space complexity of O(1), as it does not use extra space for string reversal. It is efficient and demonstrates in-place operations.
          `,
        },
      },
    },
  ],
};
