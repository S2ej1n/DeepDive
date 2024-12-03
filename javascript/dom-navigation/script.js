let val;

// ul 태그 안의 클래스 이름 list-group
const list = document.querySelector('ul.list-group');
const listitem = document.querySelector('li.list-group-item:first-child');

console.log('list', list);
console.log('listitem', listitem);

val = list.childNodes; // Nodelist 반환, linebreak(한칸 띄눈거)도 반환
val = list.childNodes[3].nodeType;

// nodeType
// 1 - Element
// 2 - Attribute
// 3 - Text node
// 8 - Comment node
// 9 - Document itself
// 10 - Doctype

// 라인 브레이크 포함 X, HTML 콜렉션 반환.
val = list.children;
list.children[1].textContent = 'Hi'; //Hi로 바꿔버릴 수 있음

val = list.firstChild; //텍스트 노드 반환함
// 그니까, list.firstChild === list.childNodes[0]; 임.

val = list.firstElementChild; // 얘는 텍스트 노드 포함 ㄴㄴ

val = list.lastChild; 
// list.lastChild === list.list.childNodes[list.childNodes.length - 1]
val = list.lastElementChild; // 얜 포함 ㄴㄴ

// child 요소 카운트
val = list.childElementCount; //5개 카운트됨

// parent 노드 반환
val = listitem.parentNode;
val = listitem.parentElement;
// 둘이 똑같음

// next sibling 반환
val = listitem.nextSibling; //텍스트노드 포함
val = listitem.nextElementSibling; // 텍스트노드 미포함
val = listitem.nextElementSibling.nextElementSibling.previousElementSibling;



console.log('val', val);