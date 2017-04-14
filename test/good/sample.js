/**
 * This is a good sample
 */

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) {
      console.log('FizzBuzz');
    } else if (i % 3 == 0) {
      console.log('Fizz');
    } else if (i % 5 == 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// Using always quotes.
var object1 = {
  'bad': true,
  'indent-size': 2,
  'with space': true,
  'break': 'yes',
  '42': ['life', 'universe', 'everything']
};

// Only using necessary quotes
var object2 = {
  bad: true,
  'indent-size': 2,
  'with space': true,
  'break': 'yes',
  42: ['life', 'universe', 'everything']
};

fizzBuzz(20);
console.log(object1);
console.log(object2);
