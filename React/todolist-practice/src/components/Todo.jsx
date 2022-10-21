import { useReducer } from "react";
import TodoItem from "./TodoItem";
import './css/Todo.css';

const initstate = {
    todolist : [{
        done : true,
        todo : "",
        id : 1
    }], 
    todoInput : "",
    countAll : 2
}

function reducer(state, action) {
    switch(action.type){
        case "checked" :
            return {...state, todolist : {...state.todolist, done : !state.todolist.done}};
        case "checkedlist" : 
        const newTodoListCheck = state.todolist.map((todolist) => {
            if(todolist.id == action.id) {
                todolist = {...todolist, done : !todolist.done}} 
            return todolist
        })
        const newTodoListCheckInput = state.todolist.map((todolist) => (todolist.id == action.id ? {...todolist, done : !todolist.done} : todolist))
        return {...state, todolist : newTodoListCheck};
        case "deletelist" :
            const newTodolistDelete = state.todolist.filter((todolist) => (todolist.id != action.id));
            return {...state, todolist : newTodolistDelete}
        case "todoInput" :
            return {...state, todoInput : action.payload};
        case "todoAdd" :
            const newtodoList = state.todolist.concat({
                done : false,
                todo : state.todoInput,
                id : state.countAll + 1
            })
            return {...state, todolist : newtodoList, countAll : state.countAll+1, todoInput : ""}
        default : 
        console.error("존재하지 않는 액션타입입니다") 
        return state;
    }
}

const Todo = () => {
    const [state, dispatch] = useReducer(reducer, initstate)
    return ( 
        <div>
            <input type="text" value={state.todoInput} onChange={(e) => dispatch({type : "todoInput", payload :e.target.value})} />
            <button onClick={() => {dispatch({type:"todoAdd"})}}>+</button>

            {/* 할일 목록 - 체크여부 / 할일 / id값(삭제 시 필요함) */}
            <ul>
                <li className="checklist">
                    <input type="checkbox" checked={state.todolist.done} onClick={() => {dispatch({type : "checkedlist"})}} readOnly />
                            {state.todolist.todo}
                    <button>x</button>
                </li>
                {/** 실제 나올 때 렌더링 되는 요소 */}
                {state.todolist.map((todolist)=> (<TodoItem key={todolist.id} todolist = {todolist} dispatch = {dispatch} />))}
            </ul>
        </div>
    );
}

export default Todo;