// // Method => Object

// // 객체 audio
// const audio = {
//     title: 'a',
//     // 객체 안에 있으니 메소드
//     play() {
//         console.log('play this', this);
//     }
// }

// audio.play();

// // audio.stop 하면 얘도 결국엔 메소드이죠.
// // 메소드 안의 this 이므로 audio 객체를 출력하는것을 알 수 있다.
// audio.stop = function() {
//     console.log('stop this', this);
// };

// audio.stop();

// // Function => Window Object
// function playAudio() {
//     console.log(this);
// }

// playAudio(); 


// // Constructor Function => {}
// function Audio(title) {
//     this.title = title;
//     console.log(this);
// }

// const audio = new Audio('a');
// // 빈 객체 안에 타이틀은 a
// // 그래서 Audio {title: 'a}가 출력됨.
// // this.title = title; 얘가 없으면 빈 객체 반환

const audio = {
    title: 'audio',
    categories: ['rock', 'pop', 'hiphop'],
    dispayCategories(){
        this.categories.forEach((category) => {
            console.log(this);
        })
    }
}
audio.dispayCategories();