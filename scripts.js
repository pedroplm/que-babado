var counter = 1;
//capitulo-1
setInterval(function () {
        document.getElementById("radio" + counter).checked = true;
            counter++;
            if (counter > 5) {
                    counter = 1;
            }  
    }, 5000);



//elas por elas
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function (){
        if (active + 1 > lengthItems){
                active = 0;
        } else {
                active = active + 1;
        }
        reloadSlider();
}
prev.onclick = function (){
        if (active - 1 < 0){
                active = 17;
        } else {
                active = active - 1;
        }
        reloadSlider();
}

function reloadSlider(){
        let checkLeft = items[active].offsetLeft;
        list.style.left = -checkLeft + 'px';

        let lastActiveDot = document.querySelector('.slider .dots li.active');
        lastActiveDot.classList.remove('active');
        dots[active].classList.add('active');
}

dots.forEach((li, key) =>{
     li.addEventListener('click', function(){
        active = key;
        reloadSlider();
     });   
})

//elas por elas2
let list2 = document.querySelector('.slider2 .list2');
let items2 = document.querySelectorAll('.slider2 .list2 .item');
let dots2 = document.querySelectorAll('.slider2 .dots2 li');
let prev2 = document.getElementById('prev2');
let next2 = document.getElementById('next2');

let active2 = 0;
let lengthItems2 = items2.length - 1;

next2.onclick = function (){
        if (active2 + 1 > lengthItems2){
                active2 = 0;
        } else {
                active2 = active2 + 1;
        }
        reloadSlider2();
}
prev2.onclick = function (){
        if (active2 - 1 < 0){
                active2 = 17;
        } else {
                active2 = active2 - 1;
        }
        reloadSlider2();
}

function reloadSlider2(){
        let checkLeft2 = items2[active2].offsetLeft;
        list2.style.left = -checkLeft2 + 'px';

        let lastActiveDot2 = document.querySelector('.slider2 .dots2 li.active2');
        lastActiveDot2.classList.remove('active2');
        dots2[active2].classList.add('active2');
}

dots.forEach((li, key) =>{
     li.addEventListener('click', function(){
        active2 = key;
        reloadSlider2();
     });   
})

