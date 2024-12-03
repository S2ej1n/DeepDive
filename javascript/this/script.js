// Method => Object

// 객체 audio
const audio = {
    title: 'a',
    // 객체 안에 있으니 메소드
    play() {
        console.log('play this', this);
    }
}

audio.play();

// audio.stop 하면 얘도 결국엔 메소드이죠.
// 메소드 안의 this 이므로 audio 객체를 출력하는것을 알 수 있다.
audio.stop = function() {
    console.log('stop this', this);
};

audio.stop();