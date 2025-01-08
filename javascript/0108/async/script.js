// // 얘가 리턴하는건 Promise 객체
// function fetchData() {
//     return new Promise ((resolve, reject) => {
//         const success = true;
//         if (success) {
//             resolve('성공');
//         } else {
//             reject('실패');
//         }
//     })
// }

// fetchData()
//     .then((response)=>{
//         console.log(response);
//     })
//     .catch((error)=>{
//         console.error(error);
//     })

// 얘는 promise를 지원함.
fetch('http://jsonplaceholder.typicode.com/todos/1')
    .then(response1 => response1.json())
    .then(json1 => console.log(json1))
    .then(() => fetch('http://jsonplaceholder.typicode.com/todos/2'))
    .then(response2 => response2.json())
    .then(json2 => console.log(json2))
    .catch((error) => {
        console.error(error);
    })
    // 성공을 하든 실패를 하든 항상 파이널리는 지나감
    .finally(()=>{
        console.log('작업 끝!')
    })