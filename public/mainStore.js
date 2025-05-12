
new Swiper('.card-wrapper', {
   
    loop: true,
    spaceBetween:30,
    // If we need pagination
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    //   dynamicBullets:true,
      
  },
    breakpoints:{
        0:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        },
      
    }
  
  });
  /////
 
let searchinput=document.querySelector("input");
let searchDiv=document.querySelector(".headerTools") 

searchDiv.addEventListener("click",()=>{
  searchinput.focus();
})
//////
