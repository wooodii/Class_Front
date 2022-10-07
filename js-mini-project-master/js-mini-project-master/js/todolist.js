// todo 입력 공간 가져오기
const todoInput = $("#todo-form #todo")

// todo button : click 이벤트로 실행 
// button에 아이디를 주지않았기때문에, 노드로 접근을하거나.
// querySelector를 이용하여 선택자를 이용하여 접근해서 객체를 가져온다
const todoButton = todoInput.next();

// todo board 객체 가져오기
const todoBoard = $("#todo-board");

// 버튼에 이벤트 리스너 : button 이므로 click이벤트
todoButton.on("click", addTodo);

function addTodo() {
    //console.log("확인");
    // todoInput -value 값을 들고옴
    const text = todoInput.val();

    // 새로 요소 생성
    // li , input type="checkbox", textNode, button
    const li =$("<li>");
    const checkbox = $("<input>").attr("type","checkbox")

    const textNode = $("<span>").html(text);
    const button = $("<button>");

    // li요소 - input, textNode, button 추가
    li.append(checkbox).append(textNode).append(button);

    // todoBoard - li 추가
    todoBoard.append(li);
        
    // todoInput.value값을 빈값으로 만들기
    todoInput.val("");

    // button에 X 문자열 추가
    button.html("X");

    // 체크박스를 눌렀을때 이벤트 리스너 실행 : click
    checkbox.on("click", todoCheck);
    
    // X버튼을 눌렀을때 이벤트 리스너 실행 : click
    button.on("click", todoDelete);
}

// 체크박스 이벤트 리스너에 들어가는 함수
function todoCheck(e) {
    const li = e.target.parentNode;
    if (e.target.checked) 
        li.style.color = "lightgray";
    else 
        li.style.color = "white";
}

// X버튼 이벤트 리스너에 들어갈 함수
function todoDelete(e) {
    // li요소를 삭제
    const li = e.target.parentNode;
    li.remove();
}