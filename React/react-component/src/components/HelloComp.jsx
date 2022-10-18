// 클래스 컴포넌트 
// 1) extends 할 경우, 노드에서 제공해주는 파일을 가져오는 방식
// const { Component } = require("react");
// 2) extends 할 경우, import로 가져오는 방식 
import { Component } from "react";

// 파일 이름 == 클래스 컴포넌트 이름
class HelloComp extends Component {
    // 클래스형 컴포넌트에서는 this를 통해서 값을 들고옴 
    // 클래스형의 경우도 생성자와 비슷
    render() {
        // 비구조화 / 구조화 할당
        // 객체나 배열의 값을 변수에다 각각 할당
        const props = this.props;
        console.log(props)
        // 내용이 길어지는 경우가 종종 있기 때문에 const{}으로 작성
        const {name, adress, num, children} = this.props;
        console.log(name);
        // props의 값은 항상 문자열로 들어옴
        console.log(typeof parseInt(num));

        return (
            <div>
            <h1> {name} 안녕하세요</h1>
            <p> {adress}에 살고 계시는군요 </p>
            <p> {children} </p>
            </div>
        );
    }
}

export default HelloComp;