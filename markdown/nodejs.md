## Node.JS

### 정의

- Node.js는 Chrome V8 자바스크립트 엔진으로 빌드된 **자바스크립트 런타임 환경**으로 주로 서버 사이드 어플리케이션 개발에 사용되는 소프트웨어 플랫폼이다.

### 특징

- Node.js는 자바스크립트를 사용해 개발한다.

- Non-blocking I/O와 단일 스레드 이벤트 루프를 통한 높은 Request 처리 성능을 가지고 있다.

  - 모든 API가 비동기 방식으로 동작한다.

  - 단일 스레드 이벤트 루프 모델을 사용함으로써 보다 가벼운 환경에서도 높은 요청 처리 성능을 보여준다.

- 데이터를 실시간 처리하는 SPA에 적합하다.

  - 단, CPU 사용률이 높은 어플리케이션에는 권장하지 않는다.

- **Socket.io라는 실시간 통신 라이브러리**를 사용하여 **대량의 데이터 처리와 실시간 통신** 모두 구현할 수 있다.

- Node.js는 **http 서버 모듈을 내장**하고 있어서 **아파치와 같은 별도의 웹서버를 설치할 필요가 없다.**

### node.js 코드 설명

1. http 모듈을 로딩하여 변수 http에 할당하였다.

   - Node.js는 파일과 1대1 대응 관계를 가지는 module 단위로 각 기능을 분할한다.

   - 하나의 모듈은 자신만의 독립적인 스코프를 가지므로 전역 변수의 중복 문제가 발생하지 않는다.

   - 모듈은 module.exports 또는 exports 객체를 통해 정의하고 외부로 공개한다.

   - 공개된 모듈은 require 함수를 사용하여 임포트한다.

   - 위 예제에서 http는 기존 선언된 모듈이며 이를 require 함수로 import 한 것이다.

2. http 모듈의 createServer([requestListener]) 메소드를 사용하여 HTTP 서버 객체를 생성한다.

   - HTTP 서버 객체는 EventEmitter 클래스를 상속한 것으로 request Listener 함수(request 이벤트가 발생하면 이를 처리하고 response를 반환)를 호출한다.

   - request Listener 함수는 request와 response 객체를 전달받으며 HTTP 요청 이벤트마다 한 번씩 호출된다.

3. createServer 메소드는 HTTP 서버 객체를 반환하고, 이 객체의 listen 메소드에 포트 번호 3000을 전달하여 서버를 실행한다.

## 모듈화와 npm

### 모듈화와 CommonJS

- **모듈이란 어플리케이션을 구성하는 개별적 요소**를 말한다.

  - 파일 단위로 분리

  - 필요에 따라 명시적으로 로드

    - 어플리케이션에 분리되어 개별적으로 존재하다가 어플리케이션의 로드에 의해 어플리케이션의 일원이된다.

  - 기능별로 분리되어 작성되므로 개발효율성과 유지보수성의 향상

- **자바스크립트를 Client-side에 국한하지 않고 범용적으로 사용하고자하며 모듈에 대한 필요성이 대두되었다.** (자바스크립트 파일은 독립적인 Scope를 가지지않고 하나의 전역 객체에 바인딩됨)

- **CommonJS와 AMD는 사양(spec)으로 라이브러리가 아니다.**

## npm

- npm(node package manager)은 Node.js에서 사용할 수 있는 모듈들을 패키지화하여 모아둔 저장소 역할 겸 패키지 설치 및 관리를 위한 CLI를 제공한다.
