// 클래스형 컴포넌트에서 state

import {Component} from "react";

class StateComp extends Component {
    //props 값을 통해 this를 통해서 사용 
    // state 컴포넌트에서 사용하는 값을 작성 
    // >> props 값은 components에서 상속받아온 값  : 명시적으로 상속받아와야 함 

    // 자바스크립트 클래스의 constructor() {}
    constructor(props) {
        // constructor 통해 클래스의 속성관리 
        // super를 통해 prop값을 가져옴 
        super(props);
        // state는 객체의 형식으로 작성함
        this.state = {
            number : 4,
            count : 0,
            minus : 10,
            reset : 10,
        }
    }

    render() {
        const{name} = this.props;
        const {number, count,reset, minus} = this.state;
        
        return (
            <div> 
            <h1>{number} </h1>   
            <button onClick ={
                // number 값을 바꾸고자 할 경우 setState를 통해 설정
                // 화살표 함수가 없을 경우 
                () => {this.setState({number : number +1})}
            }>추가버튼1(기본값 4)</button>

            <h1>{count} </h1>   
            <button onClick ={
                // count 값을 바꾸고자 할 경우 setState를 통해 설정
                () => {this.setState({count : count +1})}
            }>  추가버튼2</button>

            <button onClick ={
                () => {this.setState({count: 0})}
            }>reset</button>

            <button onClick = {
                () => {this.setState({count : count-1})}
            }>감소 버튼</button>
            </div>
        )
    }
}

export default StateComp;