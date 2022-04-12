"use strict";

var x = "global";

function foo() {
  var x = "function scope";
  console.log(x);
}

foo(); // ?
console.log(x); // ?

// 함수 레벨 스코프
var x = 0;
{
  var x = 1;
  console.log(x); // 1
}
console.log(x); // 1

// 블록 레벨 스코프
let y = 0;
{
  let y = 1;
  console.log(y); // 1
}
console.log(y); // 0

const z = 0;
{
  const z = 1;
  console.log(z); // 1
}
console.log(z); // 0
