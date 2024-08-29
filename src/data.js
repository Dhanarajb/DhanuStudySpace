// src/data.js

/**
 * This object contains problems and their respective solutions.
 * Each problem has multiple solutions demonstrating different approaches.
 */
export const problems = {
  arrays: [
    {
      title: "Find Maximum in Array",
      videoLink: "https://www.youtube.com/embed/330uDe8gCFg",
      solutions: {
        bruteForce: {
          code: `
/**
 * Finds the highest value in an array using a straightforward method.
 * 
 * @param {number[]} arr - The array of numbers.
 * @returns {number} The highest value in the array.
 */
function findMaxBruteForce(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}
          `,
          explanation: `
This method finds the highest value by checking each element:
1. Start by assuming the first element is the highest.
2. Compare each subsequent element to the current highest.
3. Update the highest value if a larger one is found.
4. Return the highest value found.

This approach is efficient for smaller arrays but might be less optimal for larger ones.
          `,
        },
        optimal: {
          code: `
/**
 * Finds the highest value in an array using a more optimized method.
 * 
 * @param {number[]} arr - The array of numbers.
 * @returns {number} The highest value in the array.
 */
function findMaxOptimal(arr) {
  return Math.max(...arr);
}
          `,
          explanation: `
This method uses JavaScript's built-in \`Math.max\` function to find the highest value:
1. Spread the array into individual arguments for \`Math.max\`.
2. Return the maximum value.

This approach is concise and leverages built-in functionality for efficiency.
          `,
        },
        pattern: {
          code: `
/**
 * Finds the highest value in an array using a pattern-based method.
 * 
 * @param {number[]} arr - The array of numbers.
 * @returns {number} The highest value in the array.
 */
function findMaxPattern(arr) {
  return arr.reduce((max, num) => (num > max ? num : max), arr[0]);
}
          `,
          explanation: `
This method uses the \`reduce\` function to find the highest value:
1. Initialize the \`max\` value with the first element of the array.
2. Iterate through the array and update \`max\` if a larger value is found.
3. Return the largest value found.

This approach is functional and elegant, leveraging array methods.
          `,
        },
      },
    },
  ],
  strings: [
    {
      title: "Reverse String",
      videoLink: "https://www.youtube.com/embed/your_video_id", // Replace with the actual video link
      solutions: {
        bruteForce: {
          code: `function reverseStringBruteForce(str) {
let reversed = '';
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
return reversed;
}`,
          explanation: `The brute force approach involves iterating through the string from the end to the beginning and appending each character to a new string. This results in the reversed string.`,
        },
        optimal: {
          code: `function reverseStringOptimal(str) {
return str.split('').reverse().join('');
}`,
          explanation: `The optimal approach uses JavaScript's built-in methods to split the string into an array of characters, reverse the array, and then join the characters back into a string. This approach is concise and leverages built-in functionality for efficiency.`,
        },
        pattern: {
          code: `function reverseStringPatternBased(str) {
let start = 0;
let end = str.length - 1;
let charArray = str.split('');

while (start < end) {
    [charArray[start], charArray[end]] = [charArray[end], charArray[start]];
    start++;
    end--;
}

return charArray.join('');
}`,
          explanation: `The pattern-based approach involves using a two-pointer technique where you swap characters from the start and end of the string moving towards the center. This approach is efficient and avoids additional space complexity compared to the brute force method.`,
        },
      },
    },
    // Add other string problems here if needed
  ],
};
