import logo from './logo.svg';
import './App.css';
// 컴포넌트에서 가져온 파일
import HelloComp from './components/HelloComp';
import HelloFuncComp  from './components/HelloFuncComp';
import MyLogin from './components/MyLogin';
import ArrawLogin from './components/ArrawLogin';
import StateComp from './components/StateComp';
import StateFuncComp from './components/StateFuncComp';
import EventComp from './components/EventComp';
import EventFuncComp from './components/EventFuncComp';

// {}를 통해서 자바스크립트 식을 들고올 수 있음 
// <ArrawLogin>으로 지정한 bool값으로 {false}가 들어감 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloComp name ="홍길동" adress="부산" num="1" > 반갑습니다 </HelloComp>
        <HelloFuncComp name="성춘향"/> 
        {/* props는 컴포넌트를 사용할 때 작성, html요소와 동일*/}
        <MyLogin login= "true" name ="우디"/>
        {/* JSX언어임으로 {}를 통해서 자바스크립트를 쓸 수 있음*/}
        <ArrawLogin login= {true} />
        {/* 값이 영향을 미치는 것은 컴포넌트 안에서만 가능 (숫자 다르게 증가가능)*/}
        <StateComp />
        <StateFuncComp />
        <EventComp />
        <EventFuncComp />
      </header>
    </div>
  );
}

export default App;
