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

//SLIDE AS CAMINHONEIRAS
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
                active2 = 3;
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

//elas por elas3
let list3 = document.querySelector('.slider3 .list3');
let items3 = document.querySelectorAll('.slider3 .list3 .item');
let dots3 = document.querySelectorAll('.slider3 .dots3 li');
let prev3 = document.getElementById('prev3');
let next3 = document.getElementById('next3');

let active3 = 0;
let lengthItems3 = items3.length - 1;

next3.onclick = function (){
        if (active3 + 1 > lengthItems3){
                active3 = 0;
        } else {
                active3 = active3 + 1;
        }
        reloadSlider3();
}
prev3.onclick = function (){
        if (active3 - 1 < 0){
                active3 = 1;
        } else {
                active3 = active3 - 1;
        }
        reloadSlider3();
}

function reloadSlider3(){
        let checkLeft3 = items3[active3].offsetLeft;
        list3.style.left = -checkLeft3 + 'px';

        let lastActiveDot3 = document.querySelector('.slider3 .dots3 li.active3');
        lastActiveDot3.classList.remove('active3');
        dots3[active3].classList.add('active3');
}

dots.forEach((li, key) =>{
     li.addEventListener('click', function(){
        active3 = key;
        reloadSlider3();
     });   
})
/* FEMME FATALE SLIDES*/
let list4 = document.querySelector('.slider4 .list4');
let items4 = document.querySelectorAll('.slider4 .list4 .item');
let dots4 = document.querySelectorAll('.slider4 .dots4 li');
let prev4 = document.getElementById('prev4');
let next4 = document.getElementById('next4');

let active4 = 0;
let lengthItems4 = items4.length - 1;

next4.onclick = function (){
        if (active4 + 1 > lengthItems4){
                active4 = 0;
        } else {
                active4 = active4 + 1;
        }
        reloadSlider4();
}
prev4.onclick = function (){
        if (active4 - 1 < 0){
                active4 = 3;
        } else {
                active4 = active4 - 1;
        }
        reloadSlider4();
}

function reloadSlider4(){
        let checkLeft4 = items4[active4].offsetLeft;
        list4.style.left = -checkLeft4 + 'px';

        let lastActiveDot4 = document.querySelector('.slider4 .dots4 li.active4');
        lastActiveDot4.classList.remove('active4');
        dots4[active4].classList.add('active4');
}

dots.forEach((li, key) =>{
     li.addEventListener('click', function(){
        active4 = key;
        reloadSlider4();
     });   
})
