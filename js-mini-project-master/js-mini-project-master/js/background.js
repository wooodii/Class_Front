// 배경이미지 이름을 배열에 저장
const images = ["back0.jpg","back1.jpg","back2.jpg"];

// 랜덤 함수의 특징 - 0~1사이의 실수 > 0~원하는 수 정수
// 배열 > 요소를 넣어주면 인덱스 값으로 접근가능
const randomNum = Math.floor(Math.random()*images.length);
const choseImage = images[randomNum];

//바디 객체를 가져옴
const bodyBackground = document.querySelector("body");

// 바디에 이미지 추가
// css에서 이미지 추가하는 방식과 동일
bodyBackground.style.background = `url(./img/${choseImage})`