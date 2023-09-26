

//временный скрипт
let receptCards = document.querySelectorAll('.recept__card')
let receptArrowOne = document.querySelector('.a1');
let receptArrowTwo = document.querySelector('.a2');
let receptArrowThree = document.querySelector('.a3');
let receptArrows = document.querySelectorAll('.description-arrow');
let receptOpenedOne = document.querySelector('.recept__1');
let receptOpenedTwo = document.querySelector('.recept__2');
let receptOpenedThree = document.querySelector('.recept__3');
// let descriptionText = document.querySelector('.recept__description--text');
let descriptionText1 = document.querySelector('.t1');
let descriptionText2 = document.querySelector('.t2');
let descriptionText3 = document.querySelector('.t3');
// открывает одну карточку


if(document.querySelector('.recept__card')){
    receptArrowOne.addEventListener('click', function(){
        receptOpenedOne.classList.toggle('recept__description--opened');               
        descriptionText1.style.display = "block";          
        receptArrowOne.classList.toggle('arrowDown');
    
    })
    
    receptArrowTwo.addEventListener('click', function(){
        receptOpenedTwo.classList.toggle('recept__description--opened');               
        descriptionText2.style.display = "block";          
        receptArrowTwo.classList.toggle('arrowDown');
    
    })
    
    receptArrowThree.addEventListener('click', function(){
        receptOpenedThree.classList.toggle('recept__description--opened');               
        descriptionText3.style.display = "block";          
        receptArrowThree.classList.toggle('arrowDown');
    
    })
}

let searchButton = document.getElementById('toggle');
let headerLogo = document.querySelector('.header__logo')
let searchItems = document.querySelectorAll('.header__item')

searchButton.addEventListener('click', function(){
    headerLogo.classList.toggle('logo__disabled');

    searchItems.forEach((element) =>{
        element.classList.toggle('logo__disabled');
    })

})
  
if(document.querySelector('.mySwiper') || document.querySelector('.brandSlider')){

  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",    
    grabCursor: true,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    slidesPerView: "1",    
    speed: 2000,
    navigation: {
        nextEl: ".slider-button-next",
        prevEl: ".slider-button-prev",
      },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 400,
      modifier: 1,
      slideShadows: false
    },
    breakpoints: {
      640: {
        slidesPerView: 2
      },
      540: {
        slidesPerView: 1
      }
    }
  });
  

  var swiper2 = new Swiper(".brandSlider", {    
    grabCursor: true,
    keyboard: true,       
    centeredSlides: true,
    freeMode: true,    
    loop: true,
    slidesPerView: "3",
    spaceBetween: 5,      
    navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
    }

  });
  
 
 
  
let slideNext = document.querySelector('.slider-button-next');
let slidePrev = document.querySelector('.slider-button-prev');
let activeAnimation = document.querySelectorAll('.slide__card--animated--img');

slideNext.addEventListener('click', function(){

activeAnimation.forEach(element =>{
 
element.animate(
  [
    { width: 0 + 'px' },
    
    { width: 500 + 'px'}
  ], 960) 

}
  );
})

slidePrev.addEventListener('click', function(){

  activeAnimation.forEach(element =>{
   
  element.animate(
    [
      { width: 0 + 'px' },
      
      { width: 500 + 'px'}
    ], 960) 
  
  }
    );
  })

}



//   new Swiper(".swiper", {
//     effect: "creative",
//     loop: true,
//     loopedSlides: 3,
//     creativeEffect: {
//         limitProgress: 2,
//         prev: {
//             translate: ["-100%", 0, 0],
//             opacity: 0.3,
//             scale: .75
//         },
//         next: {
//             translate: ["100%", 0, 0],
//             opacity: 0.3,
//             scale: .75
//         }
//     }
// });

let formOpen = document.querySelector('.contatcts__buton--round');
let contactCard = document.querySelector('.contacts__card--form');

formOpen.addEventListener('click', function(){
  contactCard.classList.toggle('card__visible');
  console.log('форма открыта')
});

let formClose = document.querySelector('.close-form');

formClose.addEventListener('click', function(){
  contactCard.classList.toggle('card__visible');
  console.log('форма закрыта')
});


document.addEventListener("DOMContentLoaded", function () {
  var eventCalllback = function (e) {
      var el = e.target,
      clearVal = el.dataset.phoneClear,
      pattern = el.dataset.phonePattern,
      matrix_def = "+7(___) ___-__-__",
      matrix = pattern ? pattern : matrix_def,
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = e.target.value.replace(/\D/g, "");
      if (clearVal !== 'false' && e.type === 'blur') {
          if (val.length < matrix.match(/([\_\d])/g).length) {
              e.target.value = '';
              return;
          }
      }
      if (def.length >= val.length) val = def;
      e.target.value = matrix.replace(/./g, function (a) {
          return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
      });
  }
  var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
  for (let elem of phone_inputs) {
      for (let ev of ['input', 'blur', 'focus']) {
          elem.addEventListener(ev, eventCalllback);
      }
  }
});

if(document.querySelector('form')){
  (function () {
    'use strict'
 

    var forms = document.querySelectorAll('.needs-validation')
 

    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
 }
 
