import { Component } from "react";
// import './css/StoryDescript'

class StoryDescript extends Component {
    constructor(props) {
        // 보이는 속성이 visible이면 true
        super(props);
        this.state = {  };
    }

    render() { 
        const {children, visible} = this.props
        
        return (
            <div className="story-descript">
                <h3>본문</h3>
                <p>{children}</p>
                {visible ? (<p>공개</p>) : (<p>비공개</p>)}        
            </div>
        );
    }
}
 
export default StoryDescript;