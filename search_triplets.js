// x + y + z = 0
// y + z = -x
// given a number, find other two numbers that add up to it?
// if nothing adds up to it, there are no combos for that number
// if two numbers are found, push the array of the first number + the two indexes into the triplets array
const search_triplets1 = function(arr) {
  arr.sort((a, b) => (a - b));
  triplets = [];
  // loop through the array
  // while loop inside the for loop
  // if there are any two numbers that add up to the given number, record that combination
  // else move on to the next iteration
  // return the results array
  for (let i = 0; i < arr.length; i++) {
    // we want to find x + y + z = 0
    // we can adjust the equation to look for a 2sum instead
    // y + z = -x

    // define -x
    let target = -arr[i];
    // define pointers for left and right to iterate through
    let start = i + 1;
    let end = arr.length - 1;
    while (start < end) {
      // define sum
      let sum = arr[start] + arr[end];

      // if sum is equal to target
      // push the 3 values as an array into the results array
      // check for if any of the three values are repeated in the rest of the array
      // this allows for any duplicates to not be pushed into the results
      if (sum === target) {
        triplets.push([-target, arr[start], arr[end]]);

        // loops until the current target index is not repeated
        while (arr[i] === arr[i + 1]) {
          i += 1;
        }
        // loops until the current left value is not repeated
        while (arr[start] === arr[start + 1]) {
          start += 1;
        }
        // loops until the current right value is not repeated
        while(arr[end] === arr[end - 1]) {
          end -= 1;
        }
        start += 1;
        end -= 1;
      } else if (sum > target) { // if sum greater than target value
        end -= 1;
      } else { // if sum less than target value
        start += 1;
      }
    }
  }
  return triplets;
};

console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(search_triplets([-5, 2, -1, -2, 3]));
console.log(search_triplets([-1, 0, 1, 2, -1, -4]));

// x + y + z = 0
// y + z = -x
// given a number, find other two numbers that add up to it?
// if nothing adds up to it, there are no combos for that number
// if two numbers are found, push the array of the first number + the two indexes into the triplets array
const search_triplets2 = function(arr) {
  arr.sort((a, b) => (a - b));
  triplets = [];
  // loop through the array
  // while loop inside the for loop
  // if there are any two numbers that add up to the given number, record that combination
  // else move on to the next iteration
  // return the results array
  for (let i = 0; i < arr.length; i++) {
    const currNum = -arr[i];
    let start = i + 1;
    let end = arr.length - 1;
    while (start < end) {
      let sum = arr[start] + arr[end];
      if (sum === currNum) {
        const triplet = [arr[start], arr[end], -currNum].sort((a, b) => (a - b));
        triplets.push(triplet);
        end -= 1;
        start += 1;
      } else if (sum > currNum) {
        end -= 1;
      } else {
        start += 1;
      }
    }

  }

  // remove duplicates
  // triplets = triplets.map(JSON.stringify);
  // triplets = new Set(triplets);
  // triplets = Array.from(triplets, JSON.parse);
  triplets = Array.from(new Set(triplets.map(JSON.stringify)), JSON.parse);
  return triplets;
};

console.log(search_triplets2([-3, 0, 1, 2, -1, 1, -2]));
console.log(search_triplets2([-5, 2, -1, -2, 3]));
console.log(search_triplets2([-1,0,1,2,-1,-4]));


// given a number, find other two numbers that add up to it?
// if nothing adds up to it, there are no combos for that number
// if two numbers are found, push the array of the first number + the two indexes into the triplets array
const search_triplets3 = function(arr) {
  arr.sort((a, b) => (a - b));
  triplets = [];
  // loop through the array
  // while loop inside the for loop
  // if there are any two numbers that add up to the given number, record that combination
  // else move on to the next iteration
  // return the results array


    // in order to find x + y + z = 0, we can adjust the equation to be
    // y + z = -x
    // this way we can assign the current index in the loop to be -x
    // and then have a while loop to find the two numbers to add up to -x
    // when the numbers are found, push the two numbers and the proper signage of x into the triplets array

    // figure out a way to not push duplicates into the results array
    // maybe do a check before pushing?
    // or skipping numbers that we are currently on?
  for (let i = 0; i < arr.length; i++) {
    //skip this number if the next number is the same
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    // search_pair(arr, -arr[i], i + 1, triplets);

    const currNum = -arr[i];
    let start = i + 1;
        end = arr.length - 1;

    while (start < end) {
      let sum = arr[start] + arr[end];

      if (sum === currNum) {
        triplets.push([arr[start], arr[end], -currNum]);
        start += 1;
        end -= 1;
        while (start < end && arr[start] === arr[start - 1]) {
          start += 1;
        }
        while (start < end && arr[end] === arr[end + 1]) {
          end -= 1;
        }
      } else if (sum > currNum) {
          end -= 1;
      } else {
          start += 1
      }
    }

  }
  return triplets;
};

console.log(search_triplets3([-3, 0, 1, 2, -1, 1, -2]));
console.log(search_triplets3([-5, 2, -1, -2, 3]));
console.log(search_triplets3([-1,0,1,2,-1,-4]));