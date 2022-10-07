// 입력폼 가져오기 - form의 sumbit을 이벤트를 사용하기위해 
const loginForm = $("#login-form");

// name 값을 가져오기위한 input
const loginInput = $("#login-form #name");
// name 값을 가질 h1 
const title = $("#title");

// 이벤트 리스너 연결
// form의 submit을 사용할 경우 click 이벤트가 아니라 
// form의 submit 이벤트로 연결해주어야한다.
loginForm.on("submit", onLoginSubmit);

function onLoginSubmit(e) {
    e.preventDefault(); // 새로고침 취소
    
    // loginInput의 value값을 가져옴
    const name = loginInput.val();

    // if문을 사용해서, name값이 없을때, 아래 실행되지않게
    // 함수에서 return을 사용하면 함수 종료
    if( name === "") {
        // alert("닉네임을 입력해주세요")
        return ;
    }

    // value값을 title에 넣어줌
    // console.log(name) // 값이 제대로 들어갔는지, console.log로 확인
    title.html(name+"님 반갑습니다");

    // loginForm , hidden 클래스 추가
    loginForm.addClass("hidden");
    // todo-form을 가져와서 hidden 클래스 제거
    $("#todo-form").removeClass("hidden");
}

