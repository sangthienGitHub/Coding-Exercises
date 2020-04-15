// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      arr.push("fizz");
    } else if (i % 5 === 0) {
      arr.push("buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      arr.push("fizzBuzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
}

let fizzBuzzCustom = function (
  str1 = "Fizz",
  str2 = "Buzz",
  n1 = 3,
  n2 = 5,
  n = 100
) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % n1 === 0) {
      arr.push(str1);
    } else if (i % n2 === 0) {
      arr.push(str2);
    } else if (i % n1 === 0 && i % n2 === 0) {
      arr.push(str1 + str2);
    } else {
      arr.push(i);
    }
  }
  return arr;
};

console.log(fizzBuzz(20));
console.log(fizzBuzzCustom("Hello", "HiveFive", 2, 5, 20));

module.exports = fizzBuzz;
