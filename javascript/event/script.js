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