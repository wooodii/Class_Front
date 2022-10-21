const TodoItem = (props) => {
    const {todolist, dispatch} = props 
    return ( 
        <li className="checkstyle">
           <input type="checkbox" checked={todolist.done} 
                    onClick={() => {dispatch({type:"checkedlist", id :todolist.id})}} readOnly/>
                    {todolist.todo}
            <button onClick={() => {dispatch({type : "deletelist", id: todolist.id})}}>x</button> 
        </li>
     );
}
export default TodoItem;