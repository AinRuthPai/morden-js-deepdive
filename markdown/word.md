- 엘리먼트 :
  요소

- 렌더링 :
  3차원 공간에 객체(object)를 2차원 화면인 하나의 장면(scene)에 바꾸어 표현하는 것
  html로 입력받아 해석하여 표준 출력 장치(모니터)로 출력해 주는 작업

- DOM :
  문서 객체 모델, 웹 브라우저가 html 페이지를 인식하는 방식을 이야기 하거나 문서 객체(document object)와 관련된 객체의 집합
  웹 페이지는 일종의 문서(document)다

- BOM :
  브라우저 객체 모델, 브라우저와 관련된 객체들의 집합이다

- CSSOM :
  CSS 객체 모델, CSS Object Model은 JavaScript에서 CSS를 조작할 수 있는 API 집합입니다. HTML 대신 CSS가 대상인 DOM이라고 생각할 수 있으며, 사용자가 CSS 스타일을 동적으로 읽고 수정할 수 있는 방법

- 메소드 :
  객체 안에 포함된 함수이다

- 객체 :
  원시 타입(Primitives)을 제외한 나머지 값들(함수, 배열, 정규표현식 등)은 모두 객체이다.
  자바스크립트 객체는 키(이름)와 값으로 구성된 프로퍼티(property)의 집합이다. 프로퍼티의 값으로 자바스크립트에서 사용할 수 있는 모든 값을 사용할 수 있다. 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메소드라 부른다.
  이와 같이 객체는 데이터를 의미하는 프로퍼티(property)와 데이터를 참조하고 조작할 수 있는 동작(behavior)을 의미하는 메소드(method)로 구성된 집합이다. 객체는 데이터(프로퍼티)와 그 데이터에 관련되는 동작(메소드)을 모두 포함할 수 있기 때문에 데이터와 동작을 하나의 단위로 구조화할 수 있어 유용하다.
  자바스크립트의 객체는 객체지향의 상속을 구현하기 위해 “프로토타입”이라고 불리는 객체의 프로퍼티와 메소드를 상속받을 수 있다. 이 프로토타입은 타 언어와 구별되는 중요한 개념이다.

  사전적 의미 : 어떠한 물건이나 대상
  프로그래밍에서의 의미 : 프로그램에서 표현하고자 하는 기능을 묶기 위한 단위

  - 객체를 구성하는 단위 :

    - 객체를 이루는 것은 데이터와 기능이다.
    - 데이터는 변수로 표현된다.
      - 객체 안에 포함된 변수를 멤버변수 혹은 프로퍼티라 한다.
    - 기능은 메서드(=함수)로 표현된다.

- 클래스 (Class) :
  `src/class.js 참고`
  객체의 설계도 역할을 하는 프로그램 소스
  공장에서 하나의 설계도를 사용하여 여러 개의 제품을 생산할 수 있는 것처럼 하나의 클래스를 통해 동일한 구조를 갖는 객체를 여러 개 생성할 수 있다.

- 객체지향 프로그래밍 (OOP)
  컴퓨터 프로그래밍 패러다임 중 하나로, 프로그래밍에서 필요한 데이터를 추상화시켜 상태와 행위를 가진 객체를 만들고 그 객체들 간의 유기적인 상호작용을 통해 로직을 구성하는 프로그래밍 방법

- 객체 지향 프로그래밍 키워드 5가지

  1. 클래스 + 인스턴스(객체)
  2. 추상화
  3. 캡슐화
  4. 상속
  5. 다형성

- 장점 :

  1. 코드 재사용이 용이
     남이 만든 클래스를 가져와서 이용할 수 있고 상속을 통해 확장해서 사용할 수 있다.

  2. 유지보수가 쉬움
     절차 지향 프로그래밍에서는 코드를 수정해야할 때 일일이 찾아 수정해야하는 반면 객체 지향 프로그래밍에서는 수정해야 할 부분이 클래스 내부에 멤버 변수혹은 메서드로 존재하기 때문에 해당 부분만 수정하면 된다.

  3. 대형 프로젝트에 적합
     클래스 단위로 모듈화시켜서 개발할 수 있으므로 대형 프로젝트처럼 여러 명, 여러 회사에서 프로젝트를 개발할 때 업무 분담하기 쉽다.

- 단점 :

  1. 처리 속도가 상대적으로 느림

  2. 객체가 많으면 용량이 커질 수 있음

  3. 설계시 많은 시간과 노력이 필요

- 원시 값 :
  객체가 아니면서 메소드도 가지지 않는 데이터
  원시 값 성질 자체가 불변성이기 때문에 변형이 가능한 성질인 객체가 아니어야 한다
  변수는 새로운 값을 재할당할 수 있지만 이미 생성한 원시 값은 객체, 배열, 함수와는 달리 변형할 수 없다

  - 재할당 과정 :

  1. 메모리에 새로운 주소 할당
  2. 재할당 받은 값 저장
  3. 재할당 받은 값의 주소를 변수가 참조

- 원시 타입 :

  - 숫자 (Number)
  - 문자열 (String)
  - 불리언 (Boolean)
  - undefinded
  - null
  - Symbol (ES6)

- 인스턴스

- 매개변수 (parameter) :
  함수를 정의할 때 사용되는 변수

- 인자 (argument) :
  함수가 호출될 때 실제로 담기는 값

- 표현식

- 바인딩

- 식별자

- 매핑

- 컴파일러

- 인터프리터

- 함수 표현식 :
  함수의 일급객체 특성을 이용하여 함수 리터럴 방식으로 함수를 정의하고 변수에 할당할 수 있는데 이러한 방식을 함수 표현식(Function expression)이라 한다

  ex )

  ```javascript
  // 함수 표현식
  // 함수명을 생략하는 것이 일반적이다
  var square = function (number) {
    return number * number;
  };
  ```

- 일급 객체 :

  특징 :

  1. 무명의 리터럴로 표현이 가능하다.
  2. 변수나 자료 구조(객체, 배열…)에 저장할 수 있다.
  3. 함수의 파라미터로 전달할 수 있다.
  4. 반환값(return value)으로 사용할 수 있다.

- 명시적 바인딩 (call, apply, bind)

- 단일 스레드

- 콜백함수 :
  함수 안에 함수

- 프로토타입(원형)

- constructor :
  `src/class.js 참고`
  클래스 내에 있는 함수이기 때문에 메소드라 부른다
  constructor 메소드는 class 내에서 객체를 생성하고 초기화하기 위한 특별한 메소드이다
  클래스 필드의 선언과 초기화는 반드시 constructor 내부에서 실시한다

- 프로퍼티(properties), 프롭스(props) :
  속성, 객체 안에 포함된 변수를 멤버변수 or 프로퍼티라 한다

- transition

- transform

- translate

- parser, parsing

- 런타임 환경

- 동기/비동기 :
  특정 코드를 수행 완료한 후 다음 코드를 실행 /
  특정 코드를 실행하는 도중 다음 코드를 실행

- 캐싱(유지?)

- 리터럴 :
  소스코드 안에서 직접 만들어 낸 상수 값 자체를 말하며 값을 구성하는 최소 단위

- ECMAScript 2015(ES6) 추가된 것 :

  - let, const, class, 화살표 함수, 템플릿 리터럴, 디스트럭처링 할당, spread 문법, rest 파라미터, Symbol, Promise, Map/Set, iterator/generator, module import/export

  1. 새로운 변수 선언 키워드 : let, const
  2. class 키워드 ,extends
  3. 화살표 함수 (Arrow Function)
  4. module 문법 : import, export

- diffing(비교) 알고리즘
  React.js의 Render함수는 jsx문법에 맞는 React Element를 반환한다. 이 때, 상태가 변하거나 프로퍼티가 변해서 DOM을 업데이트해야 하는 경우에 변경된 부분만 감지해서 바뀐 부분만 업데이트 하는 방식을 취하게 되는데, 이 변경된 부분을 감지하는 방법이다. 여기서 비교란 Virtual DOM끼리의 비교를 의미하며 React는 이전 상태와 비교를 위해 항상 이전 상태의 버츄얼 돔 사본을 유지한다.