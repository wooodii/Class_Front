// 클래스형 컴포넌트
// 컴포넌트 안에 컴포넌트를 사용
// 데이터를 사용하는 방식
// prop = 데이터를 받아오는 값,  state 함수 내부, 자체에서 사용하는 방식 
// 각각의 component가 가지고 있거나 부모 컴포넌트가 전달하는 방식으로 사용 
// 현재는, 데이터를 사용할 때 자식 컴포넌트 값을 부모로 올라가 확인하는 것이 어려움 

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
