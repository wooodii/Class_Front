// 함수형 컴포넌트
import { useMemo } from "react";
import { useState } from "react";

const UseMemoComp = () => {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(1);

    // return 값이 있는 함수 : return 의 {}에서 내용을 출력할 수 있음
    // 함수는 update할 때마다 렌더해서 사용한다.
    const doubleCount = () => {
        console.log("doubleCount")
        return count*2;
    }  

    const memoCount = useMemo(() => {
    
    },[count])
    const memoNum = useMemo(() => {
        console.log("memoNum");
        return num*3;
    },[num])
    // useMemo : 함수의 return (count*10) 된 값을 계속 사용함 
    // [] 두번째 인자 : 두번째 들어온 인자값이 바뀌었을 때, 함수를 실행함
    // state, props 값 
    // 작성 : 변수에 useMemo 함수작성, 
    // 익명함수 안에 실행할 내용(특정 값에서만 실행되어 return)을 그대로 사용
    // const memoCount = useMemo(()=> doubleCount(), [count])


    return ( 
        <div>
            {/** {}를 통해서 함수의 결과값을출력할 수 있다. 
             *   함수를 넣었을 때 리턴값이 존재한다면 내용이 그대로 출력
             *   or 값을 통해 값이 없어도 출력가능 
             *   let a = count*2
             *  <h1>{doubleCount() || 'return 값이 undefined입니다.'}</h1>      
            */}
            {/** useMemo를 사용할 때 () 없이 사용 
            <h1>{memoCount}</h1>*/}
            <h1>{memoNum}</h1>
            <h1>{doubleCount() || 'return 값이 undefined입니다.'}</h1>    
            
            {/**useMemo를 통해서 memoNum을 만들기 : num값을 3배로 실행 */}
            
            <h2>{count} / {num}</h2>   
            <h2>{count}</h2> 
            <button onClick= {() => {setCount(count+1)}}> count +1 </button>
            <button onClick= {() => {setNum(num+1)}}> num +1 </button>
        </div>
     );
}

export default UseMemoComp;