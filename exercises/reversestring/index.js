// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  if (!str || typeof str != "string" || str.length < 2) {
    return str;
  }

  const reversed = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversed.push(str[i]);
  }
  return reversed.join("");
}

console.log(reverse("apple"));

module.exports = reverse;

// function reverse(str) {
//     return str.split("").reverse().join("");
//   }

// function reverse(str) {
//     let reversedString = "";

//     for (let character of str) {
//       reversedString = character + reversedString;
//     }
//     return reversedString;
//   }
