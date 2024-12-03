// element 생성 , 생성할 태그의 이름 li
const li = document.createElement('li');

// 클래스 추가하기
li.className = 'list-group-item';

// id 추가하기
li.id = 'new-item';

// 속성 추가하기
li.setAttribute('name', 'New list item');


// link element 생성하기.
const link = document.createElement('a');

link.className = 'alarm-item';
ㅌㄴ
// 부트스트랩 아이콘 추가 하기
link.innerHTML = '<i class="bi-alarm"></i>'
li.appendChild(link);

// 어떻게 해야 이 li 요소 생성한걸 ul 요소에다 넣을 수 있을까요
document.querySelector('ul.list-group').appendChild(li);
// appendChild 라는 메소드를 사용하면 된다.