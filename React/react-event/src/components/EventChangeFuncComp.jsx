// 함수형 컴포넌트 
// react hook인 useState를 통해서 함수형 사용
// 함수 동작 방식 
// 모든 함수는 위에서 아래로 
// state 값이 실행, return부터 실행하다가 change라는 이벤트가 발생하면 함수 실행 
// 함수를 따라서 onchange 함수 내용을 실행 
import { useState } from "react";

const EventChangeFuncComp = () => {
    // set함수로 접근하기 위해서 하나의 useState에 객체로 생성
    // state의 인수로 객체형식으로 여러개 넣어서 사용 가능 
    // 2개의 값을 동시 수정할 때 (객체로 생성)
    const [message, setMessage] = useState({
        message : "안녕",
        name : "성춘향"
    });

    // onchange 함수로 바꿔서 사용하기
    // 이대로 사용하면 문자열이 통채로 들어감 > 수정 필요
    const onchange = (e) => {
        console.log(e.target.value);
        const newMessage = {
            // message라는 값을 가져와서 스프레드 연산자를 통해 풀어서 사용함 
            // 감싸져 있는 것을 빼고 밖에 빼서 사용함(어떤 걸 사용할지 모르기 때문에)
            //..., 스프레드 연산자
            // 꺼내서 펼쳐준다. 객체나 배열의 값을 꺼내서 출력 
            // 돔 전체를 가져온다기 보다 바꾸고자 하는 값만 가져와 
            // 요소가 바뀔 때마다 실행 
            ...message, // message : "안녕", name : 성춘향이라는 값이 펼쳐져서 들어감 
            // message : e.target.value // 속성은 동일한 이름을 가질 수 없고, 2개가 있다면 첫번째 값보다는 두번째 값으로 사용
            // 접근할 이벤트 객체의 이름을 가져와서 message라는 속성 이름이 들어가고, 이름을 통해서 메세지 안에value 값을 받아와 넣기
            // 객체의 속성 이름을 name이라는 속성에, 속성 이름을 동일하게 지정해 사용 input-47line
            [e.target.name] : e.target.value 
           //  message : e.target.value,
           //  name : ""

           // 매개변수 값이 무엇인지 알기 어려운 경우, 이벤트 타겟이 무엇인지 알 수 없음 
           // 함수만 보고 객체 안에서 값을 꺼내 사용하는 정도만 앎
        }
        // message를 객체 형태로 넣음 
        // 값을 넣어주면 아래쪽에 출력은 되지만, 어떤 값이 사라지나면 성춘향이라는 값이 
        // 사라지는 것에 대한 것을 볼 수 있음 
        // 값을바꾸어줄 때는 setMessage로 값을 넣어줌 
        // 바뀌는 값 하나만 넣게 되면, 홍길동이라는 값은 객체였지만 메세지라는 객체가 문자열로 변화
        //useState라는 함수는 값 전체를 변화함
        setMessage(newMessage);
    }
    return (
        <div>
            {/** h1태그에 input으로 작성한 내용 출력하기 */}
            <h1>글을 입력하세요</h1>
            {/* 이벤트를 통해 VALUE 값을 가져와 만들 때에는 onchange이용해 
             값을 가져와서 변경하면 끝*/}
            <input type="text" name="message" onChange={ onchange } />
            <p>{message.message}</p>
            <input type="text" name="name" onChange={ onchange } />
            <p>{message.name}</p>
        </div>
    )
}

export default EventChangeFuncComp;