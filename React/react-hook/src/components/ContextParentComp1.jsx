// 부모 컴포넌트가 되어서 context를 통해서 value 전달
// value값에 state와 dispatch를 전달 (객체형태) - useReducer 사용
import { useReducer } from "react";
import { useState } from "react";

// NumContext를 통해서 useState를 사용해, num값과 setNum을 전달하기 
// 화면에 출력하고 증가하는 버튼 만들기
import { CountContext, NumContext } from "./ContextComp2";
import ContextChildrenComp3 from "./ContextChildrenComp3";
import ContextChildrenComp4 from "./ContextChildrenComp4";

// 상태 변화 동작만 분리
function reducer (state, action) {
    switch (action.type) {
        case "increment":
            return {count : state.count+1};
        case "decrement" :
            return {count : state.count-1};
    }
}

const ContextParentComp1 = () => {
    const [state, dispatch] = useReducer(reducer, {count : 1});
    const [num,setNum] = useState(1);

    return ( 
        <div>
            {/** 2에서 만든 CountCountext를 provider를 이용해 상태값을 전달  
             * props값으로 넘겼던 것을 context로 넘겨받음 
            */}
            <CountContext.Provider value={ {state:state, dispatch: dispatch} }>
                <ContextChildrenComp3 />
            </CountContext.Provider>

            <NumContext.Provider value = {{num :num, setNum: setNum}}>
                <ContextChildrenComp4/>
            </NumContext.Provider>

        </div>
    );
}


export default ContextParentComp1;