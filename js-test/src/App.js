import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react'; 

function App() {

  // 마운트 될 때의 내용 추가 
  useEffect(() => {
    const progressbar = useRef(null);
            // dom태그 보다는 node 에 접근해서 사용할 수 있음 
            // dom객체가 만들어지기 이전에 이벤트를 붙이면 오류가 날 수 있음 
            window.addEventListener("scroll", function(){
                // progress바가 있다면 실행할 수 있도록
                // class로 접근하는 것 대신에 useState를 통해서 
                // progressbar 라는 이름으로 useRef를 사용가ㅡㄴㅇ 
                if(progressbar != null){
                    // progress 바 세팅함수 실행 
                    setProgress(); }
            })
          }, [])

  // progress의 width 를 스크롤 길이에 따라서 수정
        function setProgress(){
          // 스크롤한 높이
          let scrollY = document.documentElement.scrollTop
          console.log(scrollY);

          // 전체 높이 
          // 길이의 차이는 전체 높이  - 화면 크기 차이
          let totalY = document.documentElement.scrollHeight - document.documentElement.clientHeight
          console.log(totalY);

          // 퍼센트로 바꾸어서 progress css의 width값에 넣어주기 
          let percentage  = (scrollY / totalY) * 100 ;
          // css에 있는 변수들을 바꾸어 줄 때에는 단위기호(%) 를 붙여야 실행이 됨
          document.querySelector(".progress").style.width = percentage + "%";
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/** progressbar */}
        <div id="progress-bar" className="progress-bar" ref ={progressbar}>
            <div className="progress"></div>
        </div>
    </div>
  );
}

export default App;
