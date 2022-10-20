// 1) 로그인 페이지 만들기 
import { useState } from "react";
import LoginFormComp from "./LoginFormComp";

// 2) 로그인 상태관리를 위해 로그인 /이름 변수 만들기
const LoginComp = () => {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");
  return (
    <div>
      {/** 3) 로그인이 false일때 로그인창, true 인사창 */}
      {login ? (<h1>{name}님 반갑습니다</h1>) :
      // 4) props 값으로 set메소드 전달?? 
      <LoginFormComp setLogin={setLogin} setName={setName}/>
}
    </div>
  );
};

export default LoginComp;