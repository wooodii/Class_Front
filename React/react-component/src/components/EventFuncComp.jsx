// 함수형 컴포넌트
import {useState} from 'react';

const EventFuncComp = () => {
    const [num, setNum] = useState(44);
    const [name, changeN] = useState("홍길동");
    const [size, changeSize] = useState("s");

    // 익명함수 또는 화살표 함수로 작성해서 사용
    let numPlus = () => {
        setNum(num+3);
    }

    let changeName = () => {
        changeName(changeN("김개똥"))
    }

    let Size = () => {
        changeSize("m");
    }

    return (
        <div>
            {/* 같은 함수 안에 있는 내용이므로 이름만 작성 */}
            <button onClick= {()=> setNum(num+1)}> {num}</button>        
            <button onClick= {numPlus}> {num}</button>
            {/* name = " 홍길동"을 작성한 후 버튼을 클릭하면 다른 이름으로 바뀌는 함수 작성  */}
            
            <h1>{name}</h1>
            <button onClick = {changeName}> {name} </button>

            <h1>{size}</h1>
            <button onClick = {Size}>사이즈</button>
        </div>
    )
}

export default EventFuncComp;