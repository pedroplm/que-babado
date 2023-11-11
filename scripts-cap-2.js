let list3 = document.querySelector(".slider3 .list3");
let items3 = document.querySelectorAll(".slider3 .list3 .item");
let dots3 = document.querySelectorAll(".slider3 .dots3 li");
let prev3 = document.getElementById("prev3");
let next3 = document.getElementById("next3");

let active3 = 0;
let lengthItems3 = items3.length - 1;

next3.onclick = function () {
    if (active3 + 1 > lengthItems3) {
        active3 = 0;
    } else {
        active3 = active3 + 1;
    }
    reloadSlider3();
};
prev3.onclick = function () {
    if (active3 - 1 < 0) {
        active3 = 2;
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

// DICIONARIO

function toggleMenu() {
    var menuBox = document.getElementById("dictionaryBox");

    if (menuBox.style.display == "none") {
        // if is menuBox hidden, display it
        menuBox.style.display = "flex";
        menuBox.style.translate = "110%";
        sleep(400).then(() => {
            menuBox.style.translate = "-110%";
        });
    } else {
        // if is menuBox displayed, hide it 
        menuBox.style.translate = "110%";
        sleep(400).then(() => {
            menuBox.style.display = "none";
        });
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}