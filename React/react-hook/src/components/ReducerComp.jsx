// 함수형 컴포넌트
import { useReducer } from "react";
import ReducerCountComp from "./ReducerCountComp";
import ReducerMemoComp from "./ReducerMemoComp";

function reducer(state, action) {
    switch(action.type) {
        //action의 타입에 따라서 결과 출력
        case 'increment' : return {count : state.count + 1};
        case 'decrement' : return {count : state.count - 1};
        case 'reset' : return {count : 0};
        case 'inputName' : return {input : action.payload};
    }
}

// 작성한 리듀서를 가져와서  state 와 dispath로 넣어줌
// 라이프사이클은 현 컴포넌트 기준으로 진행됨
const ReducerComp = () => {
    const [state, dispatch] = useReducer(reducer, {count :0, input : ""});
    
    return ( 
        <div>
            <h1>{state.count}</h1>
            <button onClick= {() => {dispatch({type :'increment'})}}> +1 </button>
            <button onClick= {() => {dispatch({type :'decrement'})}}> -1 </button>
            <button onClick= {() => {dispatch({type :'reset'})}}> 0 </button>
            {/** 컴포넌트에 props 값으로 state와 dispath를 전달할 수 있음 */}
            <ReducerCountComp state= {state}  dispatch = {dispatch}/>
            {/** 자식 컴포넌트 ReducerMemoComp를 만들고, 
             *   state에 input =" "을 추가해, reducer를 작성하여
             *   MemoComp에서 작성한 글이 ReducerComp에서 수정되어 나오게 함
            */}
            <h1>{state.input}</h1>
            <input type="text" onChange={(e) => 
                // setState(e.target.value) 로 작성했던 것을 dispatch로 작성 
                // dispatch() {}는 action 이름으로 들어가고 ,사용할 함수 종류를 나타냄
                // payload 전송되는 데이터
                dispatch({ type : 'inputName', payload : e.target.value })} />

                {/** 함수를 전달하기 위해서 {}로 작성해 넣음 */}
            <ReducerMemoComp state={state} dispatch ={dispatch} />
        </div>
    );
}

export default ReducerComp;
