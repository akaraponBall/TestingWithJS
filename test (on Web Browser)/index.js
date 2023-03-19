//  This is index.js for testing with web browser

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
