let val;

val = window.outerHeight;
val = window.outerWidth;

val = window.innerHeight;
val = window.innerWidth;

val = window.scrollY;
val = window.scrollX;

// 현재 url에 대한 정보 포함
val = window.location;

// window.location.href = 'http://google.com/';
// 바로 구글로 이동하게 됨

window.history.forward()
// 아까 구글 들어간다음에 뒤로 돌아가서, 앞으로 가기 버튼 누르면 이동
window.history.back()
// 뒤로가기 버튼

console.log(val);