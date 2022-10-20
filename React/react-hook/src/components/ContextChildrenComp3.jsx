import { useContext } from "react";
// 사용할 컨텍스트를 가져오기
import { CountContext } from "./ContextComp2";

const ContextChildrenComp3 = () => {
    // 전역적으로 데이터 사용할 수 있도록, useContext를 통해서 데이터 불러옴
    const {state, dispatch} = useContext(CountContext);
    return ( 
        <div>
            <h1>{state.count}</h1>
            <button onClick={ () => {dispatch({type :"increment"})} }>+1</button>
            <button onClick={ () => {dispatch({type : "decrement"})}}>-1</button>
        </div>
    );
}
export default ContextChildrenComp3;