const TodoItemComp = (props) => {
    // props으로 값을 받아옴 
    const {todoitem, dispatch} = props
    return ( 
        <li className={todoitem.done && 'done'}>
        {/** TodoItem - 체크여부, 할일, id값(삭제에 필요) */}
        <input type="checkbox" checked={todoitem.done} 
                /** 데이터에 id값으로 값을 전달 - dispatch 타입에 id를 함께 추가하는 방법 */
                onClick={()=>{dispatch({type :"checkedlist", id:todoitem.id})}} readOnly />
            {todoitem.todo}
            <button onClick={() => {dispatch({type:"deletelist", id:todoitem.id})}}>x</button>
    </li>
     );
}
//context로도 수정 
export default TodoItemComp;