// 클래스형 컴포넌트
// 컴포넌트 안에 컴포넌트를 사용
import EventTestLoginForm from "./EventTestLoginForm";
import { Component } from "react";

class EventTest extends Component {
  constructor(props) {
    super(props);
    // button을 클릭하면 login을 true로 하고
    // name 출력되는 h1태그 작성
    this.state = {
      name: "dd",
      login: false,
    };
  }

  render() {
    const { login, name } = this.state;
    return (
      <div>
        {/** // state , name : "", login : false
        // input에 값을 넣은 후, > name 의 값이 input의 value 값으로 바뀌게 해준다 */}
        {this.state.login ? 
          <h1>{this.state.name}</h1> : 
          (<EventTestLoginForm/>)
        }
      </div>
    );
  }
}

export default EventTest;
