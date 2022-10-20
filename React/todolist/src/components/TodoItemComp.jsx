const TodoItemComp = (props) => {
    // props으로 값을 받아옴 
    const {todoitem, dispatch} = props
    return ( 
        <li>
        {/** TodoItem - 체크여부, 할일, id값(삭제에 필요) */}
        <input type="checkbox" checked={todoitem.done} 
                onClick={()=>{dispatch({type :"checkedlist", id:todoitem.id})}} readOnly />
            {todoitem.todo}
            <button onClick={() => {dispatch({type:"deletelist", id:todoitem.id})}}>x</button>
    </li>
     );
}
 
export default TodoItemComp;