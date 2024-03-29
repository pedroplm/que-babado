document.getElementById('clipboardCopy').addEventListener('click', clipboardCopy);
async function clipboardCopy() {
  let text = window.location.href;
  await navigator.clipboard.writeText(text);
  document.getElementById('clipboardCopy').innerHTML = "<img src='https://img.icons8.com/?size=24&id=82713&format=png' alt='share' /> <span class = 'pop-share'>link copiado<span>";
  sleep(800).then(() => {
    document.getElementById('clipboardCopy').innerHTML = "<img src='https://img.icons8.com/?size=24&id=82713&format=png' alt='share' />";
});
}



let list3 = document.querySelector(".slider3 .list3");
let items3 = document.querySelectorAll(".slider3 .list3 .item");
let dots3 = document.querySelectorAll(".slider3 .dots3 li");
let prev3 = document.getElementById("prev3");
let next3 = document.getElementById("next3");

let active3 = 0;
let lengthItems3 = items3.length - 1;

next3.onclick = function () {
    if (active3 + 1 > lengthItems3) {
        active3 = lengthItems3;
    } else {
        active3 = active3 + 1;
    }
    reloadSlider3();
};
prev3.onclick = function () {
    if (active3 - 1 < 0) {
        active3 = 0;
    } else {
        active3 = active3 - 1;
    }
    reloadSlider3();
};

function reloadSlider3() {
    let checkLeft3 = items3[active3].offsetLeft;
    list3.style.left = -checkLeft3 + "px";

    let lastActiveDot3 = document.querySelector(".slider3 .dots3 li.active3");
    lastActiveDot3.classList.remove("active3");
    dots3[active3].classList.add("active3");
}

dots3.forEach((li, key) => {
    li.addEventListener("click", function () {
        active3 = key;
        reloadSlider3();
    });
});


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



function dundaFunction() {
    var popup = document.getElementById("dundaPopup");
    popup.classList.toggle("show");
}
function bibaFunction() {
    var popup = document.getElementById("bibaPopup");
    popup.classList.toggle("show");
}
function necaFunction() {
    var popup = document.getElementById("necaPopup");
    popup.classList.toggle("show");
}


window.addEventListener("mouseover", (event) =>{
    var dunda = document.getElementById("dundaPopup");
    var neca = document.getElementById("necaPopup");
    var biba = document.getElementById("bibaPopup");
    
    if (event.target.id !== "neca"){
        neca.classList.remove("show");
    }
    if (event.target.id !== "biba"){
        biba.classList.remove("show");
    }
    if (event.target.id !== "dunda"){
        dunda.classList.remove("show");
    }
});

let screenWidth = window.screen.width;
let nanyPeople = document.getElementById("nany");
let jairoLegenda = document.getElementById("jairo");
let capas = document.getElementById("capas");

if (screenWidth >= 600){
    //DESKTOP
    capas.innerHTML =  "Número traz coluna de namoro para leitores, perfil do estilista italiano Gianni Versace, tutorial de ginástica e incentivo ao uso de camisinha"

    nanyPeople.innerHTML = "Amiga dos membros da equipe editorial do Babado, a drag e atriz Nany People perfomava na região e foi prestigiada em 1998 pela publicação";

    jairoLegenda.innerHTML = "O editor-chefe Jairo Silva se abriu em entrevista sobre os desafios que sua identidade trazia em uma sociedade preconceituosa, em 1997";


} else {
    //CELULAR
    capas.innerHTML =  "Número traz coluna de namoro para leitores, perfil do estilista italiano Gianni Versace e tutorial de ginástica"

    nanyPeople.innerHTML = "Amiga dos membros da equipe editorial do Babado, a então drag Nany People apareceu em 1998 no jornal";

    jairoLegenda.innerHTML = "O editor-chefe Jairo Silva se abriu sobre os desafios que sua identidade trazia em uma sociedade racista";
}