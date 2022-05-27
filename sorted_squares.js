// sorted squares

// this isn't O(n) since unshift time complexity increases as the input array gets larger
const make_squares = function(arr) {
  const squares = [];
  let i = 0;
      j = arr.length - 1;
  // loop through the array
  // if the absolute value of pointer i is less than pointer j
  // push the squared value of i into the squares array
  // increment i
  // else
  // push the squared value of j into the squares array
  // decrement j
  // loop until all values in the array have been accounted for
  while (i <= j) {
    if (Math.abs(arr[j]) <= Math.abs(arr[i])) {
      squares.unshift(arr[i] ** 2);
      i += 1;
    } else {
      squares.unshift(arr[j] ** 2);
      j -= 1;
    }
  }
  return squares;
};

// is O(n) since it replaces with indexing and only loops once
const make_squares2 = function(arr) {
  // create an array with the same length of the input array
  const squares = Array(arr.length).fill(0);
  // create pointers to interate through the input array
  // create a pointer to point to the next index to be filled of the result array
  let nextLargest = arr.length - 1;
      i = 0;
      j = arr.length - 1;
  // loop through the input array
  // if the absolute value of the end is greater than the beginning pointer
  // add the squared to the result array in the appropriate spot (nextLargest)
  // else add the beginning pointer squared
  // decrement the nextLargest by 1 since the it has been filled
  while (i <= j) {
    if (Math.abs(arr[j]) >= Math.abs(arr[i])) {
      squares[nextLargest] = arr[j] ** 2;
      j -= 1;
    } else {
      squares[nextLargest] = arr[i] ** 2;
      i += 1;
    }
    nextLargest -= 1;
  }
  // return the results array
  return squares;
};