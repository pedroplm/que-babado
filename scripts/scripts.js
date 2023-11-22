document.getElementById('clipboardCopy').addEventListener('click', clipboardCopy);
async function clipboardCopy() {
  let text = window.location.href;
  await navigator.clipboard.writeText(text);
}



//homepage




function toggleMenu() {
    var menuBox = document.getElementById("menu-box");
    var menu = document.getElementById("menu");

    if (menuBox.style.display == "none") {
        // if is menuBox displayed, hide it
        menu.classList.add("rainbow-hover");
        menuBox.style.display = "flex";
        menuBox.style.translate = "100%";
        sleep(400).then(() => {
            menuBox.style.translate = "-100%";
        });
    } else {
        // if is menuBox hidden, display it
        menu.classList.remove("rainbow-hover");
        menuBox.style.translate = "100%";
        sleep(400).then(() => {
            menuBox.style.display = "none";
        });
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

var counter = 1;

/* //elas por elas
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
}) */

//SLIDE AS CAMINHONEIRAS
let list2 = document.querySelector(".slider2 .list2");
let items2 = document.querySelectorAll(".slider2 .list2 .item");
let dots2 = document.querySelectorAll(".slider2 .dots2 li");
let prev2 = document.getElementById("prev2");
const next2 = document.getElementById("next2");

let active2 = 0;
let lengthItems2 = items2.length - 1;

next2.onclick = function () {
    if (active2 + 1 > lengthItems2) {
        active2 = lengthItems2;
    } else {
        active2 = active2 + 1;
    }
    reloadSlider2();
};
prev2.onclick = function () {
    if (active2 - 1 < 0) {
        active2 = 0;
    } else {
        active2 = active2 - 1;
    }
    reloadSlider2();
};

function reloadSlider2() {
    let checkLeft2 = items2[active2].offsetLeft;
    list2.style.left = -checkLeft2 + "px";

    let lastActiveDot2 = document.querySelector(".slider2 .dots2 li.active2");
    lastActiveDot2.classList.remove("active2");
    dots2[active2].classList.add("active2");
}

dots2.forEach((li, key) => {
    li.addEventListener("click", function () {
        active2 = key;
        reloadSlider2();
    });
});

//elas por elas3

/* FEMME FATALE SLIDES*/
let list4 = document.querySelector(".slider4 .list4");
let items4 = document.querySelectorAll(".slider4 .list4 .item");
let dots4 = document.querySelectorAll(".slider4 .dots4 li");
let prev4 = document.getElementById("prev4");
let next4 = document.getElementById("next4");

let active4 = 0;
let lengthItems4 = items4.length - 1;

next4.onclick = function () {
    if (active4 + 1 > lengthItems4) {
        active4 = lengthItems4;
    } else {
        active4 = active4 + 1;
    }
    reloadSlider4();
};
prev4.onclick = function () {
    if (active4 - 1 < 0) {
        active4 = 0;
    } else {
        active4 = active4 - 1;
    }
    reloadSlider4();
};

function reloadSlider4() {
    let checkLeft4 = items4[active4].offsetLeft;
    list4.style.left = -checkLeft4 + "px";

    let lastActiveDot4 = document.querySelector(".slider4 .dots4 li.active4");
    lastActiveDot4.classList.remove("active4");
    dots4[active4].classList.add("active4");
}

dots4.forEach((li, key) => {
    li.addEventListener("click", function () {
        active4 = key;
        reloadSlider4();
    });
});



const btn =  document.getElementById('btn-enviar');

btn.addEventListener('click', ()=>{
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    name.value = "";
    email.value = "";
    message.value = "";

})