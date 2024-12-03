let val;

// ul 태그 안의 클래스 이름 list-group
const list = document.querySelector('ul.list-group');
const listitem = document.querySelector('li.list-group-item:first-child');

console.log('list', list);
console.log('listitem', listitem);

val = list.childNodes; // Nodelist 반환, linebreak(한칸 띄눈거)도 반환


console.log('val', val);