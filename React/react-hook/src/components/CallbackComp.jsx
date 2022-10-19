import { useCallback, useState } from "react";

// 함수형 컴포넌트 
const CallbackComp = () => {
    const [name, setName] = useState("")
    const [count, setCount] = useState(1);
    // useCallback : 함수를 기록해서 쓰는 hook
    // 두번째인자 : 두번째 인자의 값이 바뀔 때만 함수를 새로 생성해 사용 
    // 익명함수 특징 : 한번만 쓰고 사라짐 > 익명함수를 기억하기 위해 사용
    // function 함수이름() {}으로 선언하거나 const 함수이름 = (){}
    // 위 같이 작성하면 함수 이름을 여러번 꺼내서 쓸 수 있음 

    const changeName = useCallback(() => {setName("홍홍홍")}, [])
    
    
    // []의 인자값이 바뀔 때, 안의 콜백함수가 새로 만들어져서 사용될 수 있음
    // e => 이벤트가 발생했을 때 실행되는 함수가 놓여야 함
    // 이벤트가 발생하면 객체 생성이 되는데 객체가 e라는 파라미터에 할당 
    // event관련 object를 받는 argument
    const onchange = useCallback((e) => {
        console.log(count);
        // 어떤 값을 넣는 count 값은 1로 고정 
        // 콜백은 받는 인자가 없다면 고정값으로 사용 
        // 받아오는 매개변수를 제외하고는 처음 값으로 고정됨 
        setName(count +1)
        setName(e.target.value)}, [count])
    
    return ( 
        <div>
            <input type="text" onChange={onchange} />
            <button onClick={changeName}>이름: {name}</button>
        </div>
     );
}
 
export default CallbackComp;