// useContext의 데이터 관리 및 특성 
// 리액트는 부모 값을 props를 통해 계속해서 아래로 내려주는 형식으로 사용 
// useContext를 사용하면 중간에 props 전해주는 것 없이 자손컴포넌트에 값을 전해줄 수 잇음
import React, { Component } from "react";
import { useContext } from "react";
// useContext를 통해서 공유할 값

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  },
  blue : {
    foreground :  "#0000ff",
    background : "#eeeeee"
  }
};

// useContext를 통해서 값을 공유하기 위해 createContext를 사용 
const ThemeContext = React.createContext(null);
const ContextCompAll = () => {
    return ( 
        <div>
          {/** createContext로 만든 컴포넌트를 값을 사용하는 컴포넌트로 감싼다. 
           *    toobar안에 있는 자식 컴포넌트에서도 사용할 수 있음
           *    useContext를 통해서 조상의 값에 접근할 수 있음
          */}
          <ThemeContext.Provider value = {themes.dark}>
          <Toolbar />
          </ThemeContext.Provider>

          <ThemeContext.Provider value = {themes.blue}>
          <ThemeBluePtag />
          </ThemeContext.Provider>
        </div>
    );
}

// 다른 js에서 import해서 사용하기 위함
export default ContextCompAll;

// ContextCompAll 에서 사용할 컴포넌트  > 현재 컴포넌트에서만 사용할 수 있음 
// 함수형 컴포넌트 툴바
// contextCompAll을 부모로 하고, 2개의 자식을 가지는 컴포넌트
const Toolbar = () => {
    return ( 
        <div>
          <ThemeButtonFunc />
          <ThemeButtonClass />
          <ThemeDarkPtag />
        </div>
     );
}

// Toolbar안에 들어갈 컴포넌트 
const ThemeButtonFunc = () => {
  // useContext를 통해서 조상값에 접근, createContext로 만든 컴포넌트를 가져와 값 사용
  const theme = useContext(ThemeContext);
  return (
    <div>
      <button style={ {backgroundColor : theme.background, color : theme.foreground} }> 직접 넣어준 색상값</button>
    </div>
  )
}


class ThemeButtonClass extends Component {
  // 클래스로 값을 가져올 때, static을 통해서 conTextType으로 가져온다
  static contextType = ThemeContext; 
  render() { 
    return (
      <div>
        <button style={{
          // contextType으로 접근하지 않고 context로 접근
          backgroundColor : this.context.background,
          color : this.context.foreground}}>클래스형 컴포넌트의 버튼</button>
      </div>
    );
  }
}

// Toolbar안에 들어갈 새로운 p태그 작성 
// 함수형으로 만들어 동일한 theme.dark를 가질 수 있도록 
const ThemeDarkPtag = () => {
  const theme = useContext(ThemeContext);
  return ( 
    <div>
      <p style={
        {backgroundColor : theme.background, color : theme.foreground}
      }>p태그에 적용한 함수형theme.dark</p>
    </div>
   );
}

//themes에 blue를 추가해 배경색이 blue이고 color가 white 주제를 만들어 확인
const ThemeBluePtag = () => {
  const theme = useContext(ThemeContext);
  return ( 
    <div>
      <p style = {
        {backgroundColor : theme.background, color :theme.foreground}
      }>p태그에 적용한 함수형 theme.blue</p>
    </div>
   );
}
