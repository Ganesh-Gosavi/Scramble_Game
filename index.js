const msg = document.querySelector('. msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;

btn.addEventListener('click',function(){
    if (!play){
        play= true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
    }

})
