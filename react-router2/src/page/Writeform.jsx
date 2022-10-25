import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SetContext, StateContext } from "../context/ContextComp";

// 서버인 것 처럼 내용을 사용
const Writeform = () => {
    // navigate
    const navigate = useNavigate();
    const boardlist = useContext(StateContext);
    const setBoard = useContext(SetContext);
    const [context, setContext] = useState("");

    // 데이터와 관련된 내용은 서버측에서 관리하는 내용
    // 전체 데이터를 리액트에서 관리(서버를 사용하고 있지 않아서)
    const addBoard = () => {
    const newList = boardlist.concat({ id: boardlist.length+1, context : context})
    setBoard(newList);
    navigate('/boardlist')
    // 위치를 boardlist로 이동할 수 있도록 작성
    //setBoard(newList);
    // link와 같은 일을 하며 -1을 넣을 경우 뒤로가기 가능
    //navigate('/boardlist');
};

    return (  
        <div>
            <h1>Writeform입니다</h1>
            <textarea onChange={(e) => {setContext(e.target.value)}} 
                cols="30" rows="10"></textarea>
                <p>{context}</p>
                <button onClick={(addBoard)}>addBoard <br/> button</button>
        </div>
    );
}

export default Writeform;