import './css/ClassNameComp.css';
import { Component } from "react";

// 클래스형 컴포넌트 
// className 사용법
class ClassNameComp extends Component{
    constructor(props) {
        super(props);
    }
    state = { 
        active : false,
        classList : "on"
     }
    render() { 
        return ( 
            <div>
                <button onClick={() => {
                    // 함수에서는 이벤트가 발생했을 때 for문을 사용 가능
                    this.setState({active : !this.state.active})
                    if(this.state.classList == "on") {
                        this.setState({classList: "off"})
                    }else{
                        this.setState({classList : "on"})
                    }
                }}>activeToggle</button>

                {/** css의 class의 내용을 추가해주거나, 작성해줄 수 있음 */}
                <ul>
                    <li className='on'>활성화된 리스트입니다ㅏㅏㅏㅏ</li>
                    <li className={this.state.active ? "on" : "off"}>비활성화된 리스트입니다ㅏㅏㅏㅏ</li>
                    <li className={this.state.classList}> 활성화된 리스트</li>
                </ul> 
            </div>
        );
    }
}

export default ClassNameComp;