new Swiper('.card-wrapper-2',{
    loop: true,
    spaceBetween:255,
    // If we need pagination
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-2',
      prevEl: '.swiper-button-prev-2',
    },
    pagination: {
      el: '.swiper-pagination-2',
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
            slidesPerView:5
        },
      
    }
  
  }
  );
  
  
  