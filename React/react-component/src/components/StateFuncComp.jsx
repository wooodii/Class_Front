// 함수형 컴포넌트 state
// react에서 useState(hook의 하나)를 가져와서 사용함 
// 리엑트 16.8버전 이후 추가
import {useState} from "react"

const StateFuncComp = () => {
    // 구조화 할당을 통해 값과 수정하는 함수를 리턴받음
    const [message, setMessage] = useState("메세지입니다")
    const [name, setName] = useState("홍길동");
    const [count,setCount] = useState(1); 

    return (
        <div>
            <h1>{message}</h1>
            <button onClick = {
                () => setMessage("글자를 수정하였음")
            }> 수정 </button>

            <h1>{name}</h1>
            <button onClick={
                () => setName("성춘향")
            }>ChangeName</button>
        
            
        </div>
    ); 
}

export default StateFuncComp;