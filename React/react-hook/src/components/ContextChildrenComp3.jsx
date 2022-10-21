import { useContext } from "react";
// 사용할 컨텍스트를 가져오기
import { CountContext } from "./ContextComp2";

const ContextChildrenComp3 = () => {
    // 전역적으로 데이터 사용할 수 있도록, useContext를 통해서 데이터 불러옴
    // CountContext로 받아온 값을 구조화 할다당을 통해서 나누어줌 
    // 컴포넌트별로 받고 싶은 경우 여기에 useState 나 useContext를 추가 
    const {state, dispatch} = useContext(CountContext);
    return ( 
        <div>
            {/** 여기로 받아와 자손이나 자식의 값도 변경할 수 있음
             */}
            <h1>{state.count}</h1>
            <button onClick={ () => {dispatch({type :"increment"})} }>+1</button>
            <button onClick={ () => {dispatch({type : "decrement"})}}>-1</button>
        </div>
    );
}
export default ContextChildrenComp3;