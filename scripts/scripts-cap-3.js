document.getElementById('clipboardCopy').addEventListener('click', clipboardCopy);
async function clipboardCopy() {
  let text = window.location.href;
  await navigator.clipboard.writeText(text);
  document.getElementById('clipboardCopy').innerHTML = "<img src='https://img.icons8.com/?size=24&id=82713&format=png' alt='share' /> <span class = 'pop-share'>link copiado<span>";
  sleep(800).then(() => {
    document.getElementById('clipboardCopy').innerHTML = "<img src='https://img.icons8.com/?size=24&id=82713&format=png' alt='share' />";
});
}


/* GALERIA DEPOIS DO FIM */
let list5 = document.querySelector('.slider5 .list5');
let items5 = document.querySelectorAll('.slider5 .list5 .item');
let dots5 = document.querySelectorAll('.slider5 .dots5 li');
let prev5 = document.getElementById('prev5');
let next5 = document.getElementById('next5');

let active5 = 0;
let lengthItems5 = items5.length - 1;

next5.onclick = function (){
        if (active5 + 1 > lengthItems5){
                active5 = lengthItems5;
        } else {
                active5 = active5 + 1;
        }
        reloadSlider5();
}
prev5.onclick = function (){
        if (active5 - 1 < 0){
                active5 = 0;
        } else {
                active5 = active5 - 1;
        }
        reloadSlider5();
}

function reloadSlider5(){
        let checkLeft5 = items5[active5].offsetLeft;
        list5.style.left = -checkLeft5 + 'px';

        let lastActiveDot5 = document.querySelector('.slider5 .dots5 li.active5');
        lastActiveDot5.classList.remove('active5');
        dots5[active5].classList.add('active5');
}

dots5.forEach((li, key) =>{
     li.addEventListener('click', function(){
        active5 = key;
        reloadSlider5();
     });   
});