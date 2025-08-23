**Activity-1**. Create an arrow function called multiply that takes 2 numbers, multiplies them together, and returns the result.
multiply(2, 3) => 6
multiply(7, 10) => 70

**Activity-2**. Continuing from exercise 12j, write the arrow function on one line (if you already did this, skip this exercise).

**Activity-3**. Create a function countPositive(nums) that takes an array of numbers and returns how many numbers in the array are greater than 0. Create this function using .forEach() instead of a loop.
countPositive([1, -3, 5]) => 2
countPositive([-2, 3, -5, 7, 10]) => 3
Solutions + more exercises in description

**Activity-4**. Create a function addNum(array, num) that takes an array of numbers and returns an array where each number is increased by num. Create this function using .map() instead of a loop.
addNum([1, 2, 3], 2) => [3, 4, 5]
addNum([-2, -1, 0, 99], 2) => [0, 1, 2, 101]
Bonus: Try to use the one-line shortcut in your solution.

**Activity-5**. Create a function removeEgg(foods) that takes an array of strings and returns an array where the string "egg" is removed. Create this function using .filter() instead of a loop.
removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']) => ['apple', 'ham']

**Activity-6**. Update exercise 12n to only remove the first 2 eggs from the array. Again, use .filter() instead of a loop.
removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']) => ['apple', 'egg', 'ham']

**Activity-7**. Go back to the earlier exercises in lesson 12 (12c - 12i) and switch the code to use arrow functions. (When passing a function into another function, use arrow functions. Otherwise, you can use either syntax.)

**Activity-8**. Go back to the earlier exercises in lesson 12 (12c - 12i) and instead of using onclick="...", switch the code to use .addEventListener('click', ...)
