// react snippets인 ccc를 입력하고 enter 
// ctrl + space를 Component에 마우스를 누르면 import 자동입력
import { Component } from "react";

class EventTestLoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            login :false,
        }
    }

    
    render() { 
        return (  
            <div>
            <input
              type="text"
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
            <button
              onClick={() => {
                this.setState({ login: true });
              }}>
              로그인
            </button>
          </div>  
        );
    }
}
 
export default EventTestLoginForm;