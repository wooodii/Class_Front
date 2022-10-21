import { useReducer } from "react";
import TodoItemComp from "./TodoItemComp";

const initstate = {
    // todoitem의 형태 확인 : 1개의 todo값을 가지고 있음
    // 필요한 내용을 가져와서 출력
    todoitem : {
        done : true,
        todo : "확인",
        id : 1
    },
    // 배열을 통해서 여러개의 todoitem 사용
    todolist : [
        {
            done : true,
            todo : "첫번째 할일",
            id : 1
        },
        {
            done : false,
            todo : "두번째 할일",
            id : 2
        }
    ], 
    // todoitem을 넣을 공간
    // todo값을 입력받을 todoInput
    // countAll은 작성해준 개수에 아이디 값으로 사용해서, 개별로 접근하기 위해 
    // 아이디를 따로 만들어서 넣음 
    // 아이디 값을 시간값으로 넣어도 가능(시간값은 항상 다르기 때문)
    todoInput : "",
    countAll : 2, // 전체개수를 아이디 삼음
}

function reducer(state, action) {
    switch (action.type) {
        case "checked" :
            return {...state, todoitem : {...state.todoitem, done: !state.todoitem.done}};
        case "checkedlist":
            // todoitemcomp
            // 리스트 안에서 객체 하나를 찾아서, 그 객체의 done을 !값으로 바꾸어줌
            // 실제로 작성 시에는 하나씩 다 찾아 들어가서 조건에 맞다면 새로 객체를 바꾸어줌 
            // 객체 하나를 찾는 방법 : id을 통해 찾음
            // map은 return된 모든 값을 새로운 배열로 만들어줌, 각각의 list에서 todoitem을 가져옴 
            // list에 있는 아이디 == todoitemcomp에서 받아온 아이디, 같은 데이터임을 확인
            const newTodoList = state.todolist.map( (todoitem)=> {
                if ( todoitem.id == action.id ) {
                    // 새로 객체를 만들어주어서, todo의 done 바꾸어줌
                    todoitem = {...todoitem, done : !todoitem.done}}
                return todoitem
            } )
            // 바뀐 값을 수정된 배열에 넣어줌 return
            const newTodoList2 = state.todolist.map((todoitem)=>(todoitem.id == action.id ?  {...todoitem, done : !todoitem.done} : todoitem ))
            return {...state, todolist : newTodoList};
        case "deletelist":
            // id 값을 가져와서, id값과 같은 객체를 제외하고 배열생성
            // 가져온 아이디 값이 다르다면 새로운 배열을 넣어서 유지하고, id값이 같다면 삭제할 리스트이기 때문에 제외하고 넣음 
            const newTodolist = state.todolist.filter((todoitem)=>( todoitem.id != action.id));
            return {...state, todolist : newTodolist}
        case "todoInput":
            //3333 action.payload 를 통해서 값을 받아와 type은 구분하는데 사용, action.payload는 값을 가져오는데 사용
            // ...state를 전체 가져오는 것은 input만 넣게 될 경우 객체의 원래 값을 유지하기 위해서 state를 가져와서 풀어서 사용함 
            // payload는 e.targetvalue 값이 들어감
            return { ...state , todoInput : action.payload};
        case "todoAdd" :
            //4444 객체를 만들어서 todolist에 붙여 새로운 배열을 만들어줌
            // 객체로 이루어진 배열을 연결하기 위해서 객체값으로 연결 
            const newTodoList3 = state.todolist.concat({
                done : false, // 체크가 되어있지 않을 것 
                todo : state.todoInput, // 입력된 값 가져오기
                id : state.countAll+1 // 유일한 값을 위해 작성한 개수대로 추가
            })
            
            // 위 객체로 쓴 내용을 return에 넣어서 사용 
            // state값을 유지하고 바꿔야 할 배열값을 넣어줌 
            // 작성하고 버튼을 눌렀을 때 글자가 남아있지 안았으면 하는 경우, input에 value를 추가하고, todoinput을 빈칸으로"" 만듦
            return {...state, todolist : newTodoList3, countAll : state.countAll+1, todoInput: ""}
        default : // 다른 값이 들어왔을때 현재 state를 유지하고 오류를 알려준다.
            console.error("존재 하지 않는 액션타입입니다")
            return state;
    }
}

// todoComp를 찾고 usereducer를 통해서 각각의 값들을 받아옴
// instate함수와 reducer에 작성해 값을 가져옴 
const TodoComp = () => {
    const [state, dispatch ] = useReducer(reducer, initstate)
    return (  
        <div>
            {/**3333 입력받을 때 onchange 사용 todoinput이라는 타입을 만들어서 객체 형태로 전달된 값음 
             *   이 객체가 action으로 들어감 = {type , payload}*/}
            <input type="text" value= {state.todoInput} onChange={(e)=>{ dispatch({type: "todoInput", payload : e.target.value})}}/>
            {/** 4444 todolist를 concat으로 배열을 만들고 배열을 출력하는 식으로 사용 */}
            <button onClick={()=> {dispatch({type:"todoAdd"})}}>+</button>

            {/** 할일 목록은 ul에 li태그를 넣어서 사용, todoItem은 어떻게 사용할 것인지 작성 */}
            <ul>
                <li>
                    {/** TodoItem - 체크여부, 할일, id값(삭제에 필요) 
                     * state에 있는 특성으로 바뀌기 때문에 readonly를 넣어주고, checked 특성을 넣어 state.todoitem.done 특성을 추가
                     * li를 삭제하기 위해서는 id값이 필요함
                    */}
                    <input type="checkbox" 
                        checked={state.todoitem.done} 
                        onClick={()=>{dispatch({type: "checked"})}} readOnly />
                        {state.todoitem.todo}
                    <button>X</button>
                </li>
                {/** TodoItemComp를 만들어 map을 통해서 내용 출력 */}
                {/** todolist를 작성하고 안에 있는 내용들을 map을 통해서 출력
                 *   map 에서 안에 있는 객체들을 하나씩 꺼내서 값을 전달해줌, todoitem을 통해서 객체 값을 전달, dispatch를 통해서 state를 수정 
                 *   todolist에 있던 아이템을 찾아서 수정, todoitemcomp로 연결 -props
                 */}
                { state.todolist.map((todoitem)=>(<TodoItemComp key={todoitem.id} todoitem={todoitem} dispatch={dispatch} />))}
            </ul>
        </div>
    );
}

export default TodoComp;