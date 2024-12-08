const count = 20;
let itemIndex = 0;

const observer = new IntersectionObserver( entris => {
    // entries에는 타겟에 뭐가 있는지의 정보도 있다.
    console.log('entris',entris);

    entris.forEach(entry => {
        const list = document.querySelector('.list');

        if(entry.isIntersecting){
            for(let i = itemIndex; i<itemIndex+count; i++){
                let item = document.createElement('p');

                item.textContent = i;
                item.className += 'item';
                list.appendChild(item);
            }

            itemIndex = itemIndex + count;
        }
    })
}, {root:null, threshold:0.1})

observer.observe(document.querySelector('.end'))