// prop으로 값을 받아오고 dispatch로 값을 받아옴 
const ReducerCountComp = (props) => {
    const {state, dispatch} = props
    return ( 
        // useReducer 의state와 dispath를 props로 들고와서 
        // 자식 컴포넌트에서 부모의 state 값을 바꿀 수 있음
        // dispatch를 통해서 상위 부모의 값을 받아와 바꿀 수 있음
        <div>
            <h1>{state.count}</h1>
            <button onClick={ () => {dispatch ({type : 'increment'})}}> +1 </button>
        </div>
    );
}

export default ReducerCountComp;