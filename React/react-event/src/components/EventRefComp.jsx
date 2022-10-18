import React, {Component} from "react" ;

class EventRefComp extends Component {
    constructor (props) {
        super(props)
        // dom을 저장할 변수 만들기 
        this.textInput = null;
        // ref속성을 통해 dom 가져오기 
        // 화살표함수는 작성된 공간의 this를 가져옴 
        // 익명이나 선언함수는 선언될 때의 this를 찾지만, 
        // 화살표함수는 처음부터 this가 없기 때문에 당시의 this를 가져옴
        // 화살표함수는 만들어졌던 곳에서 this를 가져오기 때문에 bind를 할 필요가 없음
        this.setTextInputRef = (element) => {
            this.textInput = element; 
            // 값이 들어갔는지 콘솔로 확인
            console.dir(this.textInput);
            // 값 변경 
            // dom 요소를 넣었기 때문에 클릭햇을 때 이벤트를 만들어 값이 들어가는 방식으로 변경
            // this.textInput.value ='안녕';
        }
        this.changeData = this.changeData.bind(this);
        // React.createRef를 통해 들고오기
        this.myRef = React.createRef();
        // 화살표함수를 사용하면 bind를 사용할 필요가 없음 
        this.changeRefData = () => {
            // createRef를 통해 들고오면 current에 담겨서 온다.
            console.log(this.myRef);
            this.myRef.current.focus();
        }
    }

    changeData() {
        // ref속성을 통해 가져온 dom 객체는 
        // JS에서 ID를 통해 가져온 것과 동일하게 사용가능 함
        this.textInput.focus(); 
        // 넓이와 높이와 같은 dom의 값을 들고오고 싶을 때 사용 가능 
        this.textInput.value =" 클릭해서 값이 바뀌었습니다"
    }

    render() {
        return (
            <div>
                <button onClick={this.changeData }> 이벤트 버튼 </button>
                <input type="text" ref={this.setTextInputRef} />
                <button onClick= {this.changeRefData}>createRef를 통해 가져온 DOM이벤트 버튼</button>
                <input type="text" ref ={this.myRef} />
            </div>
        )
    }
}

export default EventRefComp;