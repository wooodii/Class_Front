// 1) 로그인 페이지 만들기 
import { useState } from "react";
import LoginFormComp from "./LoginFormComp";

// 2) 로그인 상태관리를 위해 로그인 /이름 변수 만들기 - useState
const LoginComp = () => {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");
  return (
    <div>
      {/** 3) 로그인이 false일때 로그인창, true 인사창*/}
      {login ? (<h1>{name}님 반갑습니다</h1>) :
      // 4) props 값으로 set메소드 전달 - 거짓일 때 로그인 폼 값을 출력
      // setLogin이라는 이름으로 수정하는 값들을 props을 통해서 넘겨줌
      // 수정가능한 메소드도 props을 통해서 아래로 내려줌 
      // loginForm으로 들어가면 form 으로 작성함 모습을 봄
      // useState로 만든 각각의 속성들도 값들을 각각 보내야 하기 때문에 여러개인 경우, 보내기 힘듦 
      <LoginFormComp setLogin={setLogin} setName={setName}/>
}
    </div>
  );
};

export default LoginComp;