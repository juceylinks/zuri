const Slide = ()=>{


const burger = document.querySelector('.burger');
const status = document.querySelector('.status');

burger.addEventListener('click', ()=>{
    status.classList.toggle('active');
});

}

Slide();