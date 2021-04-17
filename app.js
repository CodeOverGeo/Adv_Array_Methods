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

function addKeyAndValue(arr, key, value) {
  arr.forEach(function (val) {
    val[key] = value;
  });
  return arr;
}

//?

// Write a function called doubleValuesWithMap which accepts an array and returns
//  a new array with all the values in the array passed to the function doubled

function doubleValuesWithMap(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}

// Write a function called valTimesIndex which accepts an array and returns a new
// array with each value multiplied by the index it is currently at in the array.

function valTimesIndex(arr) {
  return arr.map(function (val, idx) {
    return val * idx;
  });
}

// Write a function called extractKey which accepts an array of objects and some key
// and returns a new array with the value of that key in each object.

function extractKey(arr, key) {
  return arr.map(function (value) {
    return value[key];
  });
}

// Write a function called extractFullName which accepts an array of objects and
// returns a new array with the value of the key with a name of “first” and the
// value of a key with the name of “last” in each object, concatenated together with a space.

function extractFullNames(arr) {
  return arr.map(function (value) {
    return value.first + ' ' + value.last;
  });
}

// Write a function called filterByValue which accepts an array of
// objects and a key and returns a new array with all the objects that contain that key.

function filterByValue(arr, key) {
  return arr.filter(function (value) {
    return value[key];
  });
}

// Write a function called find which accepts an array and a value and returns
// the **first element** in the array that has the same value as the second parameter
// or undefined if the value is not found in the array.

function find(arr, val) {
  return arr.filter(function (value) {
    return value == val;
  })[0];
}

// Write a function called findInObj which accepts an array of objects, a key, and some
// value to search for and returns the **first found value** in the array.

function findInObj(arr, key, val) {
  return arr.filter(function (value) {
    return value[key] == val;
  })[0];
}

// Write a function called doubleOddNumbers which accepts an array and
// returns a new array with all of the odd numbers doubled
// (HINT - you can use map and filter to double and then filter the odd numbers).

function doubleOddNumbers(arr) {
  return arr
    .filter(function (val) {
      return val % 2 !== 0;
    })
    .map(function (value) {
      return value * 2;
    });
}
