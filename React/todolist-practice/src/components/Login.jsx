import { useState } from "react";
import LoginForm from "./LoginForm";

const Login = () => {
    const [login, setLogin] = useState(false);
    const [name, setName] = useState(""); 
    
    return (
        <div>
            {login ? (<h1> {name}님 환영합니다</h1>) : 
            // 이거는 이름값을 입력한 상태랑 같은 거 아닌지? 
            <LoginForm setLogin={setLogin} setName={setName}/>
            }
        </div>
    );
}

export default Login;