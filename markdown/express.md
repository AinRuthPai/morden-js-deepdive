## Express

- **app.listen(3000, 함수)**

  - 3000포트를 기반으로 함수 실행, 대기 중인 상태로 머물러있음

  - localhost:3000은 127.0.0.1:3000과 같다.

- **app.get('/', 함수)**

  - get요청 url 경로를 먼저 적어주고, request, response 인자를 줘서 콜백함수를 줌

  1. res.send() : 응답 보내주기

  2. res.sendFile() : 파일을 보내줄 수도 있다. 인자로 절대경로를 다 적어줘야하지만 **dirname은 현재 app.js파일의 경로가 저장되어 있다. 그래서 **dirname + 그 이후의 경로를 적어주면 된다.

- **app.use(express.static('폴더명'))**

  - 변경되지 않는 정적인 파일(javascript, css, images 등) static파일을 지정해두고 "이 요청이 오면 그냥 줘~"라고 서버에게 하는 것.

  - app.use는 미들웨어 등록하는 라우터이고 stati은 express 기본 미들웨어이기 때문에 설치 없이 사용 가능.

  - express가 디렉토리 'public'을 static폴더로 기억하고 public 아래에 있는 파일들은 바로 static으로 접근 가능.

- **<form> action, method / <input> name**

  - action은 서버에 어디로 보낼 것인지, method는 어떤 메소드로 보낼 것인지.

  - name은 서버에서 받을 때 객체의 키값이 됨.

- **app.post('경로', 함수)**

  - 해당 경로로 post 요청이 왔을 때 함수 실행. (경로는 form태그의 action의 경로)

  - get이 데이터를 받아올 때는 req.param으로 받아올 수 있지만 post는 body-parser라는 모듈이 필요(npm 설치)
