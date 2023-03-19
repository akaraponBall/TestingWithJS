function power(base, degree) {
  let result = 1;
  if (degree < 0) {
    return -1;
  }
  for (let i = 1; i <= degree; i++) {
    result = result * base;
  }
  return result;
}

module.exports = power;

// Top 10 testing libraries for JS
// https://openbase.com/categories/js/best-javascript-testing-framework-libraries?vs=tape%2Cnightwatch%2Cjest
