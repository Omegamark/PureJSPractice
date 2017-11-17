function forOfBasics() {
  const iterable = ["bibbidy", "bobbidy", "buu"];

  for (const value of iterable) {
    console.log(value);
  }
}

// forOfBasics();

function forOfAndMap() {
  const iterable = new Map([["one", 1], ["two", 2]]);

  for (const [key, value] of iterable) {
    console.log(`Key: ${key} and Value: ${value}`);
  }
}

// forOfAndMap();

function forOfAndSet() {
  const iterable = new Set([1, 1, 2, 2, 1]);

  for (const value of iterable) {
    console.log(value);
    console.log("I'm the iterable", iterable);
  }
}

// forOfAndSet();

function forOfAndString() {
  const iterable = "Javascript";

  for (const value of iterable) {
    console.log(value);
  }
}

// forOfAndString();

function args() {
  // "arguments" is a built in variable which iterates over all arguments passed.

  for (const arg of arguments) {
    console.log(arg);
  }
}

// args("a", "b", "c");

function forOfAndGeneratorFunction() {
  function* generator() {
    yield 1;
    yield 2;
    yield 3;
  }
  for (const g of generator()) {
    console.log(g);
  }
}

// forOfAndGeneratorFunction();

function forOfAndClosingIterators() {
  const iterable = ["hickory", "dickory", "doo"];

  for (const value of iterable) {
    console.log(value);
    break;
  }
}

// forOfAndClosingIterators();

function forOfAndObjects() {
  const obj = { fname: "foo", lname: "bar" };
  // Plain objects are not iterable, so this will throw and error.
  for (const value of obj) {
    console.log(value);
  }
}

// forOfAndObjects()

function forOfAndArrayLikeObject() {
  const obj = { length: 3, 0: "foo", 1: "bar", 2: "baz" };
  // To create an Array from and Array Like Object, the object must include a length property.
  const array = Array.from(obj);
  for (const value of array) {
    console.log(value);
  }
}

// forOfAndArrayLikeObject();

function forOfVsForInOne() {
  Array.prototype.newArr = () => {};
  Array.prototype.anotherNewArr = () => {};
  const array = ["foo", "bar", "baz"];

  for (const value in array) {
    console.log(value);
    console.log(array);
    console.log(Array.prototype);
  }
}
// For...in iterates over the array construtor's prototype and enumerates inherited properties
/* For...in doesn't only enumerate the array declaration above, it also looks for inherited non-enumerable properties from the constructor's prototype, in this case newArr and anotherNewArr and prints them out also.*/

// forOfVsForInOne();

function forOfVsForInTwo() {
  Array.prototype.newArr = () => {};
  const array = ["foo", "bar", "baz"];

  for (const value of array) {
    console.log(value);
  }
}

// forOfVsForInTwo();
