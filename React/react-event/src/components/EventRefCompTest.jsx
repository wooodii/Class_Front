// 1 클래스형 컴포넌트 
import React, {Component} from "react";

class EventRefCompTest extends Component {
    constructor(props) {
        super(props);
        // 2 콜백 함수를 통해 들고오기
        this.input = null;
        // 3 함수를 통해서 값을 바꿈 
        this.setInput = (element) => {
            this.input = element;
        }
        // 4 배경색 변경 
        this.changeBackground = () => {
            this.input.style.backgroundColor = "red";
        }
        // 6 createRef 를 통해서 가져온 DOM 
        this.inputRef = React.createRef();
        this.changeRefBackground = () => {
            // 7 current를 통해 속성에 접근
            this.inputRef.current.style.backgroundColor ="red";
        }
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.setInput} />
                {/* 5 배경색 변경 함수를 버튼에 연결 */}
                {/*요소에 대한 속성값이 필요한 경우는 ref를 사용*/}
                <button onClick ={this.changeBackground}>색을 바꾸는 버튼 </button>
                <input type="text" ref={this.inputRef} />
                <button onClick = {this.changeRefBackground}>색을 바꾸는 버튼</button>
            </div>
        )
    }
}

export default EventRefCompTest;