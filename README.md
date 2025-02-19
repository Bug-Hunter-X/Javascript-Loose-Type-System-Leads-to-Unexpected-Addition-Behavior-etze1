# Javascript Loose Type System Leads to Unexpected Addition Behavior
This repository demonstrates a common issue in Javascript stemming from its dynamic typing: unexpected behavior when performing addition with different data types.

## Bug Description
Javascript's loose typing allows for implicit type coercion, which can lead to unexpected results when adding numbers, strings, null, and undefined values.  The `+` operator behaves differently depending on the operand types, sometimes concatenating strings instead of performing numerical addition. 

## Bug Reproduction Steps
1. Clone the repository.
2. Run `bug.js`. Observe the unexpected outputs.

## Solution
The solution involves explicit type checking and coercion to ensure the addition operation behaves as expected.  The `bugSolution.js` demonstrates a corrected approach using `typeof` to check for string and non-number types, then converting them to numbers before performing addition.

## Technologies Used
* Javascript
