window.onload = function () {
    // 문서가 load 될 때 이 함수 실행

    let text = document.getElementById("text");
    // 아이디가 text 인 요소를 return

    text.innerHTML = "HTML 문서 loaded";
}

const aElement = document.querySelector('a');

aElement.addEventListner('click', () => {
	alert('a element clicked');
});

//
const buttonElement = document.querySelector('.btn2');

buttonElement.addEventListner('click', (event) => {
    let val;
    val = event.target; // 콘솔에 넣을경우 이 요소가 출력됨.
    val = event.target.id; 
    val = event.target.classList;
    
    val = event.type; //click

    // 윈도우로부터의 거리 좌표
    val = event.clientY;
    // 요소로부터의 거리 좌표
    val = event.offsetY;
    
    console.log(event);
})