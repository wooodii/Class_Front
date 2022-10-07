// 플러그인을 만들 때는, 
// 자바스크립트와 css를 따로 빼서 사용할 수 있도록 제공해준느 것 
// 사용을 할 때는, 요소들을 어떤 식으로 사용해야 하는지 예제들을 알려주고 js와 css를 사용하는지 보고 접근


window.addEventListener("DOMContentLoaded", function(){
    // dom객체가 만들어지기 이전에 이벤트를 붙이면 오류가 날 수 있음 
    window.addEventListener("scroll", function(){
        // progress바가 있다면 실행할 수 있도록
        if(document.querySelector(".progress-bar") != null){
            // progress 바 세팅함수 실행 
            setProgress();
        }
    })
})

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

}