// // 기본 형태
// (
//     function () {
//         // Do fun stuff
//     }
// )()

(function () {
    var aName = "Barry";
})();
// IIFE 내부에서 정의된 변수는 외부 범위에서 접근이 불가능하다.
console.log(aName)
// throws "Uncaught ReferenceError: aName is not defined"