const triggerOpen=document.querySelectorAll('[trigger-button]');
const triggerClose=document.querySelectorAll('[close-button]');
const overlay=document.querySelector('[data-overlay]');
// const sliderbox = document.querySelector('.sliderbox')

for(let i=0;i<triggerOpen.length;i++){
  let currentid = triggerOpen[i].dataset.target,
  targetEl=document.querySelector(`#${currentid}`);
  // targetEl = searchFloat;

  const openData = function(){
    targetEl.classList.remove('active');
    overlay.classList.remove('active');
  };

  triggerOpen[i].addEventListener('click',function(){
    targetEl.classList.add('active');
    overlay.classList.add('active');
  });

  targetEl.querySelector('[close-button]').addEventListener('click',openData);
  overlay.addEventListener('click',openData);
}


// mobile-menu submenu
const submenu = document.querySelectorAll('.child-trigger');

submenu.forEach((menu)=>menu.addEventListener('click',function(e){
  e.preventDefault();
  submenu.forEach((item)=> item != this? item.closest('.has-child').classList.remove('active') : null);
  if(this.closest('.has-child').classList != 'active'){
    this.closest('.has-child').classList.toggle('active');
  }
}))

// sorter

const sorter = document.querySelector('.sort-list');
if(sorter){
  const sortLi = sorter.querySelectorAll('li');
  sorter.querySelector('.opt-trigger').addEventListener('click',function(){
    sorter.querySelector('ul').classList.toggle('show')
  });

  sortLi.forEach((item)=> item.addEventListener('click',function(){
    sortLi.forEach((li) => li != this ? li.classList.remove('active') : null);

    this.classList.add('active');
    sorter.querySelector('.opt-trigger span.value').textContent =this.textContent;
    sorter.querySelector('ul').classList.toggle('show')
    
  }))
}

// tabbed

const trigger = document.querySelectorAll('.tabbed-trigger'),
      content = document.querySelectorAll('.tabbed > div');
trigger.forEach((btn)=>{
  btn.addEventListener('click',function(){
    let dataTarget = this. dataset.id,
    body = document.querySelector(`#${dataTarget}`);
    
    trigger.forEach((b)=> b.parentNode.classList.remove('active'))
    trigger.forEach((s)=> s.classList.remove('active'))
  // 머가문제야ㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑ

  })
})







// slider
const swiper = new Swiper('.sliderbox', {

  loop: true,
  effect:'fade',
  autoHeight: true,
  
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },
});

// carousel
const carousel = new Swiper('.carouselbox', {

  spaceBetween: 30,
  slidesPerView: 'auto',
  centeredSlides: true,

  navigation: {
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev',
  },

  breakpoints:{
    481:{
      slidesPerView: 2,
      slidesPerGroup: 1,
      centeredSlides: false,
    },
    640:{
      slidesPerView: 3,
      slidesPerGroup: 3,
      centeredSlides: false,
    },
    992:{
      slidesPerView: 4,
      slidesPerGroup: 4,
      centeredSlides: false,
    }
  }
});


