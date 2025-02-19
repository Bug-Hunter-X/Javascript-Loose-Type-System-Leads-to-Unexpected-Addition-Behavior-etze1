function foo(a,b){return a+b;}console.log(foo(10,20));//Expected output 30
function foo(a,b){return a+b;}console.log(foo(10,"20"));//Expected output 1020
function foo(a,b){return a+b;}console.log(foo(10,null));//Expected output 10null
function foo(a,b){return a+b;}console.log(foo(10,undefined));//Expected output NaN