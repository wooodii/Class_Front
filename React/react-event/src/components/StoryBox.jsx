import React, {Component} from "react";
import StoryTitle from "./StroyTitle";
import StoryDescript from "./StoryDescript";

// 클래스형 컴포넌트
class StoryBox extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div>
                {/* children 으로가져오려하기 때문에 <></> 로 사용*/}
                <StoryTitle> 제목입니다</StoryTitle>
                <StoryDescript visible={true}> 본문내용입니다1 </StoryDescript>
                <StoryDescript visible={false}> 본문내용입니다2 </StoryDescript>
            </div>
        );
    }
}

export default StoryBox;