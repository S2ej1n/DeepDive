// for (let i = 0; i <10; i++) {

// }

// for in
const user = {
    name : "han",
    province : "경기도",
    cty : "성남시"
}

for(let x in user) {
    console.log(`${x}: ${user[x]}`)
}

// do while
let i = 100;

do {
    console.log('Number ' + i);
    i++;
}

while (i<10);