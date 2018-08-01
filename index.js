function countdown(callback) {
  setTimeout(function () {
    callback();
  }, 2000);
}

function createMultiplier(multiplyValue) {
  return function (value) {
    return multiplyValue * value;
  };
}

function multiplier(a, b) {
  return a * b;
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);
var doublerWithBind = multiplier.bind(null, 2);
<<<<<<< HEAD
var triplerWithBind = multiplier.bind(null, 3);
=======
var triplerWithBind = multiplier.bind(null, 3);
>>>>>>> 0754a5a28420bd012f8487c712da8769b7bbd1e3
