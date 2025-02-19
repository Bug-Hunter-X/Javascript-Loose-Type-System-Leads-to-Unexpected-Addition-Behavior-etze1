function foo(a, b) {
  // Explicitly check for string type and convert to numbers if necessary
  if (typeof a === 'string') a = parseFloat(a);
  if (typeof b === 'string') b = parseFloat(b);

  // Handle null and undefined explicitly
  if (a === null || a === undefined) a = 0;
  if (b === null || b === undefined) b = 0;

  return a + b;
}
console.log(foo(10, 20)); // Expected output: 30
console.log(foo(10, "20")); // Expected output: 30
console.log(foo(10, null)); // Expected output: 10
console.log(foo(10, undefined)); // Expected output: 10
console.log(foo(null, undefined)); // Expected output: 0