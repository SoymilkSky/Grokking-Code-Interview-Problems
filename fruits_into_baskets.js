/*
You are visiting a farm to collect fruits. The farm has a single row of fruit trees. You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.

You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions:

Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
You can start with any tree, but you can’t skip a tree once you have started.
You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
Write a function to return the maximum number of fruits in both baskets.

Example 1:

Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
Example 2:

Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket.
This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']
*/

const fruits_into_baskets = function(fruits) {
  let longest = 0;
  let j = 0;
  const fruitsBasket = {};
  for (let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i];
    if (!(fruit in fruitsBasket)) {
      fruitsBasket[fruit] = 0;
    }
    fruitsBasket[fruit] += 1;

    while (Object.keys(fruitsBasket).length > 2) {
      let lastFruit = fruits[j];
      if (fruitsBasket[lastFruit] > 0) {
        fruitsBasket[lastFruit] -= 1;
        if (fruitsBasket[lastFruit] === 0) {
          delete fruitsBasket[lastFruit];
        }
      }
      j += 1;
    }
    longest = Math.max(longest, i - j + 1);
  }

  return longest;
};
