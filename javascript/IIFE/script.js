// // 기본 형태
// (
//     function () {
//         // Do fun stuff
//     }
// )()

// (function () {
//     var aName = "Barry";
// })();
// // IIFE 내부에서 정의된 변수는 외부 범위에서 접근이 불가능하다.
// console.log(aName)
// // throws "Uncaught ReferenceError: aName is not defined"

var result = (function () {
    var name = "Barry";
    return name;
})();
// 함수 자체가 리턴이 되는게 아니라, 결과값이 바로 리턴이됨.
console.log(result);
// "Barry"