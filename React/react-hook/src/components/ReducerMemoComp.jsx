const ReducerMemoComp = (props) => {
    const {state, dispatch} = props;

    return ( 
        <div>
            <h1>{state.input}</h1>
            <input type="text" onChange={(e) =>         
                dispatch({ type : 'inputName', payload : e.target.value })} />
                {/**값을 전달할 때 객체 안에 값을 전달해서 reducer 에서 사용 가능 
                 *  자식에서도 dispatch 값을 사용할 수 있도록 함 */}
        </div>
     );
}
 
export default ReducerMemoComp;