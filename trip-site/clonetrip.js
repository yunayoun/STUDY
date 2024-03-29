let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let switchLogin = document.querySelector('.switch-login');
let switchRegister = document.querySelector('.switch-register');
let loginCard = document.querySelector('.login-card');
let registerCard = document.querySelector('.register-card');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.video-btn');


switchLogin.addEventListener('click',()=>{
    loginCard.classList.add('active');
    registerCard.classList.add('active');
});
switchRegister.addEventListener('click',()=>{
    loginCard.classList.remove('active');
    registerCard.classList.remove('active');
});

searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

window.onscroll = ()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    //스크롤하면 검색창 사라짐
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');

}
formBtn.addEventListener('click',()=>{
    loginForm.classList.add('active');
});
formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');
});

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src =btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    // 여기까지만하면  클릭시 슬라이드가능

    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    // 자동으로 슬라이드 

    breakpoints:{
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    },
});
var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop: true,
    // 여기까지만하면  클릭시 슬라이드가능

    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    // 자동으로 슬라이드 

    breakpoints:{
        450:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:3,
        },
        991:{
            slidesPerView:4,
        },
        1200:{
            slidesPerView:5,
        },
    },
});