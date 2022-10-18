// props의 자료형 설정 
import {PropTypes} from "prop-types";

// 함수형 컴포넌트
// 매개변수로 props 값을 가져와서 사용
const ArrawLogin = (props) => {

    const {login, name} = props
    console.log(typeof login);

    return ( 
        <div>
            {
                // 로그인 자체를 받아와서 확인
                login ? 
                (
                    <div>
                    <h1>로그인에 성공하셨습니다</h1>
                    <p>{name} 님 안녕하세요</p>
                    </div>
                ) : (
                    <h1>로그인이 필요합니다.</h1>
                )
            }
        </div>
    )
}

export default ArrawLogin;

// props 자료형 설정
// import {PropTypes} from "prop-types"; 를 사용해 작성
// 여러개 작업을 할 때는 어떤 자료형이 들어와야 하는지 지정해줌
ArrawLogin.propTypes = {
    // PtopTypes. 속성에 들어가는 것 중에 boolean -> bool로 넣어야 함 
    login : PropTypes.bool,
}

// defaultProps
// prop의 값이 들어오지 않았을 때, 대체할 값 
// 지금은 값이 존재하기 때문에 성춘향이라는 값이 들어오고 ,login 값이 false로 들어오기 
ArrawLogin.defaultProps = {
    name : "기본이름"
}