// Write a function called doubleValues which accepts an array and
// returns a new array with all the values in the array passed to
// the function doubled
function doubleValues(arr) {
  const newArray = [];
  arr.forEach(function (val) {
    newArray.push(val * 2);
  });
  return newArray;
}

// Write a function called onlyEvenValues which accepts an array and
// returns a new array with only the even values in the array passed
// to the function

function onlyEvenValues(arr) {
  let newArray = [];
  arr.forEach(function (val) {
    if (val % 2 === 0) newArray.push(val);
  });
  return newArray;
}

// Write a function called showFirstAndLast which accepts an
// array of strings and returns a new array with only the first
// and last character of each string.

function showFirstAndLast(arr) {
  let newArray = [];
  arr.forEach(function (val) {
    newArray.push(val[0] + val[val.length - 1]);
  });
  return newArray;
}

// Write a function called addKeyAndValue which accepts an
// array of objects, a key, and a value and returns the array
// passed to the function with the new key and value added for each object
