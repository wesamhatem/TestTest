// const sum = require('./sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
const Math = require('./sum');
// MyMathModule.sum(a, b);
// MyMathModule.multiply(a, b);
// MyMathModule.subtract(a, b);

test('adds 1 + 2 to equal 3', () => {
  expect(Math.sum(1, 2)).toBe(3);
});
test('mul 1 * 2 to equal 2', () => {
  expect(Math.multiply(1, 2)).toBe(2);
});
test('sub 2 - 1 to equal 1', () => {
  expect(Math.subtract(2, 1)).toBe(1);
});