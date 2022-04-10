"use strict";

// 생성자 함수
// 함수명의 첫 글자가 대문자인 경우 = 생성자 함수
function ConstructorExample() {
  // ----필드 시작----
  this.name = "Tony";
  this.age = 20; // 멤버 변수(필드)
  // ----필드 끝----

  // ----멤버 함수 시작---
  this.functionA = function () {
    console.log("function A");
  };

  this.functionB = () => {
    console.log("function B");
  };
  // ----멤버 함수 끝----
}

let obj = new ConstructorExample();

console.log("이름: ", obj.name);
console.log("나이: ", obj.age);

obj.functionA();
obj.functionB();
