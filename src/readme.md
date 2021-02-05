### 최소 사양의 서버 
- express
- set babel
- use nodemon 
- express router
- controller

### express
Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

### What is Middleware in Express
Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

### src / dist 분리
- 배포 시점에 `Babel`을 통한 transpile이 완료되어야 한다.
- 실시간으로 `babel-node` `babel-register`를 통해 transpile이 진행되기는 하지만,
이 두 가지는 `production` 목적으로 개발된 것이 아님 -> `babel-cli`를 통해 transpile 후 실행하는 것을 권고하고 있다.
- 실제로 개발된 소스를 관리하는 폴더 `src`, Babel로 transpile된 실행될 소스를 관리하는 폴더 `dist`를 분리해야 한다.

### controller
- 미들웨어 프레임워크 (미들웨어의 일종)
- `req` 객체는 CRUD 할 때 많이 사용, 정보 관리하는 객체
- `next`는 에러가 발생하여 catch 에서 next(e)를 실행하면 에러 핸들러로 간다
- Nodejs 기반 서버는 싱글 스레드이며 에러에 굉장히 취약, 첫 실행될 때 메모리 위에 상주하는 `실행형` 서버이기 때문에 처리하지 못하는 에러가 발생하면 프로세스가 죽어버린다. So, 에러 핸들링을 careful하게 해줘야 함 
- `express-cli`로 시작하면 중앙에서 에러 핸들링을 어느정도 해주기 때문에 신경쓸 필요는 없다 


### mysql 설치
- 설치 후 접속 (127.0.0.1:3306 <- default port>)
- arctype 프로그램 사용
- sequelize 공식문서에서 require로 사용하기를 권고, import를 사용하면 수정을 좀 해야한다 