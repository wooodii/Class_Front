import { useRef } from "react";

// 클래스 컴포넌트의 react.createRef 와 동일 
// 요소를 dom 객체로 가져와 사용함 
// 요소에 직접적인 접근이 필요할 때에는 ref를 통해서 사용
const RefComp = () => {
    const inputRef = useRef(null); 
    return ( <div>
        <input type="text" ref={inputRef} />
        <button onClick={() =>{
            console.log(inputRef);
            inputRef.current.style.backgroundColor = "pink";
        }}>ref 확인</button>
    </div> );
}

export default RefComp;