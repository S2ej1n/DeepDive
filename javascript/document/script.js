// let val;

// val = document;

// val = document.baseURI; // 웹 페이지의 절대 URI를 반환
// val = document.head; //<head> 태그 반환
// val = document.body; //<body> 태그 반환

// val = document.forms; //<form> 태그 반환
// val = document.forms[0].id; 
// val = document.forms[0].classList;
// val = document.forms[0].className;

// val = document.scripts; //스크립트 태그 반환
// val = document.scripts[0].getAttribute('src'); //스크립트 태그의 src 속성

const headerContainer = document.getElementById('header-container');
// headerContainer.style.display = 'none';

// console.log(headerContainer);

headerContainer.textContent = 'Text Content';
headerContainer.innerText = 'Inner Text';
headerContainer.innerHTML = '<span>Inner HTML</span>';