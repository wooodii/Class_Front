// 클래스형 컴포넌트 
// props 값을 login과 name 을 받아와서 login이 true일 때, 
// 로그인에 성공하였습니다. name입니다. 를 출력하고 
// 아닐 때, 로그인이 필요합니다. 를 출력 
import {Component} from "react";


class MyLogin extends Component {
    render () {
        const {login, name} = this.props;

        return login ? (
            <div>
                <h1>로그인에 성공</h1>
                <h3>{name}입니다.</h3>
            </div>) : (
                <div>
                    <h1>로그인이 필요합니다.</h1>
                    <p>리액트를 시작하였습니다.</p>
                </div>
            );
    }
}

export default MyLogin;

