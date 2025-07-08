//Create a JavaScript program that hides and reveals a secret message using string operations.

let secret = "The sun rises in the East";

// 1. Print the original message
console.log("Original:", secret);

// 2. Convert the entire string to uppercase
let upper = secret.toUpperCase();
console.log("Uppercase:", upper);

// 3. Replace "East" with "West"
let replaced = secret.replace("East", "West");
console.log("Replaced:", replaced);

// 4. Get the length of the string
console.log("Length of string:", secret.length);

// 5. Extract "sun rises" from the sentence
let sliced = secret.slice(4, 14);
console.log("Sliced part:", sliced);

// 6. Check if the word "moon" is in the string
let hasMoon = secret.includes("moon");
console.log("Includes 'moon'? ->", hasMoon);

// 7. Get the character at index 5
console.log("Character at index 5:", secret.charAt(5));
