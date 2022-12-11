// Callback
function sum(num1, num2) {
  return num1 + num2;
};

function calc(num1, num2, callback) {
  return callback(num1, num2); 
};

console.log(calc(5, 1, sum));

setTimeout(function () {
  console.log('Hello Javascript!');
}, 2000);

function greting(name) {
  console.log(`Hello ${name}!`);
}

setTimeout(greting, 2000, 'Brandon');