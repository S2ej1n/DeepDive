// 부모 노드
const listParent = document.querySelector('ul');
const list = document.querySelectorAll('li');

//요소 지우기
// listParent.removeChild(list[0]);

//요소 교체하기
const oldElement = document.getElementById('A');
const newElement = document.createElement('span');

newElement.textContent = "Hi";

// oldElement.parentNode는 listParent와 같음.
// 부모 요소를 찾기 위해 parentNode 사용.
oldElement.parentNode.replaceChild(newElement, oldElement);
