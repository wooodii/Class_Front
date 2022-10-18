import React, {Component} from "react";

// 클래스형 컴포넌트
class StoryTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 1 js 공간에 원하는 값을 담아서 저장이 가능
            time : new Date()
        };
    }

    render() { 
        const {children} = this.props;
        // 1-1 this.state로 time 값을 가져와서 수정
        const {time} = this.state;
        return (
            <div>
                <h1>{children}</h1>
                <p>{time.getMonth+1} / {time.getDate}</p>
            </div>
            
        );
    }
}

export default StoryTitle;