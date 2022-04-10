"use strict";

class Player {
  constructor(name, health, skill, xp = 3) {
    this.name = name;
    this.health = health;
    this.skill = skill;
    this.xp = xp;
  }
}

const player1 = new Player("player1", 100, "class", 7);
const player2 = new Player("player2", 90, "javascript");

console.log(player1);
console.log(player2);

// 객체 지향 프로그래밍
// 클래스는 객체 지향 프로그래밍의 초석이다
// 클래스는 일종의 틀이다  ex) 붕어빵 틀
class Human {
  // 클래스 내에 있는 함수이기 때문에 메소드라 부른다
  // constructor 메소드는 class 내에서 객체를 생성하고 초기화하기 위한 특별한 메소드이다
  // 클래스 필드의 선언과 초기화는 반드시 constructor 내부에서 실시한다
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.arms = 2;
    this.legs = 2;
  }
  sayHello() {
    return `Hi! my name is ${this.name}!`;
  }
}

class Teenager extends Human {
  constructor(name, age) {
    super(name, age);
    this.emotional = true;
  }
  curse() {
    return "@!#$@#!%#$@!";
  }
}

class Baby extends Human {
  constructor(name, age, talk) {
    super(name, age);
    this.cute = true;
    this.talk = talk;
  }
  cry() {
    return "waa waa";
  }
}

// 인스턴스
// 인스턴스는 붕어빵 틀에서 찍혀 나온 붕어빵에 속한다
// 클래스에서 새 객체(인스턴스)new를 만들 때 constructor는 자동으로 호출된다
// constructor는 인자를 받을 수 있다 ex) ("Elon Musk", 50)
const elon = new Human("Elon Musk", 50);
const tom = new Teenager("Tom", 15);
const su = new Baby("Su", 2, "can talk");

console.log(tom.curse());

console.log(elon.sayHello());
console.log(tom.sayHello());
console.log(su.sayHello());

console.log(elon);
console.log(tom);
console.log(su);
