**Activity-1**.
Create an array of strings, loop over the array, and check if the string 'search' is inside the array. If it is, console.log() the index of 'search'. If not, console.log(-1).
Examples:
• ['hello', 'world', 'search', 'good'] => console.log(2)
• ['not', 'found'] => console.log(-1)

**Activity-2**.
Modify 11o so that if 'search' appears multiple times, it logs the index of the first appearance. Use break;
Example:
• ['hello', 'world', 'search', 'good', 'search'] => console.log(2)

**Activity-3**.
Create a function findIndex(array, word) that searches an array for a string and returns the index of the first appearance. If it doesn’t exist, return -1.
Examples:
• findIndex(['green', 'red', 'blue', 'red'], 'red') => 1
• findIndex(['green', 'red', 'blue', 'red'], 'yellow') => -1

**Activity-4**.
Create a function removeEgg(foods) that takes an array of strings and returns a new array with all 'egg' strings removed.
Example:
• removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']) => ['apple', 'ham']
(Hint: use continue; to skip.)

**Activity-5**.
Update 11r to only remove the first 2 'egg' strings.
Example:
• removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']) => ['apple', 'egg', 'ham']

**Activity-6**.
Using .reverse(), update 11s to only remove the last 2 'egg' strings.
Example:
• removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']) => ['egg', 'apple', 'ham']

**Activity-7**.
In 11t, .reverse() modifies the original array. Update the code so it does not modify the original.
(Hint: use .slice() to copy the array.)
Example:

javascript
Copy code
const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
console.log(removeEgg(foods)); // ['egg', 'apple', 'ham']
console.log(foods);            // ['egg', 'apple', 'egg', 'egg', 'ham']
