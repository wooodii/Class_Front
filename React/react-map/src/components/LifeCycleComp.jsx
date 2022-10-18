// 클래스형 컴포넌트, 라이프 사이클 
import { Component } from "react";

class LifeCycleComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : "라이프사이클",
            time : new Date(),
        }
    }

    // 클래스에 안에 있는 속성인 변수가 되기 때문에 
    // 접근할 때는 this를 통해서 접근해야 함 
    id= 0; 
    cnt =0;

    // 컴포넌트의 실행시기에 따라서 라이프사이클 메서드 사용이 가능하다
    componentDidMount () {
        console.log("마운트하였습니다");
        // 1초마다 함수 실행하는 타이머함수 
        this.id = setInterval(()=> {this.setState({time : new Date()})}, 1000);
    }

    componentDidUpdate () {console.log("업데이트")};

    componentWillUnmount () {
        console.log("언마운트");
        clearInterval(this.id);
    }

    render() {
        // 선언이 될 때마다 새로 재할당이 되어서 들어감 
        // render 바깥쪽에 class에서 사용하는 값으로 둔다면, 
        // setState가 실행이 되면 라이프사ㄹ이클 업데이트 메소드가 실행됨 
        // 업데이트 메소드가 실행된다는 것은 화면에 내용이 출력이 됨
        return (

            // setState 값이 바꼈을 때 update 
            <div>
                <h1 onClick={() => {
                    this.setState({title:'라이프사이클중 업데이트'})
                    }}>
                        {this.state.title}
                    </h1>
                    {/** state 값이 아닌 변수로 사용된 내용은 자동으로 업데이트 메소드를 실행하지 않음 
                     *   화면은 바뀌지 않지만 그 안의 데이터는 계속 바뀌고 있다 데이터가 바꿔져도 화면이 바뀌지 않는 경우
                    */}
                    <button onClick = {() => {this.cnt++}}> {this.cnt}</button>
                    {/** 마운트될 때마다 초가 바뀌면서 출력, */}
                    <p>{this.state.time.getHours()} : {this.state.time.getMinutes()} : {this.state.time.getSeconds()}</p>
            </div>
        );
    }
}

export default LifeCycleComp;