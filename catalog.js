
new Swiper('.card-wrapper-1', {
   
    loop: true,
    spaceBetween:10,
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
            slidesPerView:2
        },
      
    }
  
  });
  
  
 
let searchinput=document.querySelector("input");
let searchDiv=document.querySelector(".headerTools") 
let image=document.querySelectorAll(".Discount")
searchDiv.addEventListener("click",()=>{
  searchinput.focus();
})
//////]

let Div1 = document.querySelectorAll(".AllP");
let btn1 = document.querySelectorAll(".btn");
const rulesButton = document.getElementById("rules-btn");
const closeButton = document.getElementById("close-btn");
const rules = document.getElementById("rules");


window.onload = function () {
  
  Div1.forEach(function (ele) {
    ele.style.display = 'none';
  });
}
function slider(){
  document.addEventListener('DOMContentLoaded', () =>{
    image.style.position = 'relative';
    image.style.top="130px";
  })
}
btn1.forEach(function (ele) {
  ele.addEventListener("click", function () {
    slider();
    Block(ele.getAttribute("data-target"));
  });
});
function Block(target) {
  Div1.forEach(function (ele) {
    if (ele.getAttribute("data-heart") === target) {
      if (ele.style.display === 'block') {
       
        ele.style.display = 'none';
       
      
       
      
      
      } else {
        
        ele.style.display = 'block';
        
     
        
      
      
        
      
      }
    } else {
      ele.style.display = 'none'; 
     
    }
  });
}
let swiper=document.querySelector(".wrapperAll");
let head=document.querySelector(".head1");
//aside
rulesButton.addEventListener("click", function(){
  
          rules.classList.add("show")
          if(rules.classList.contains("show")){
            swiper.style.transform = `translateX(301px)`;
            head.style.transform = `translateX(301px)`;
          }



} );
closeButton.addEventListener("click", function(){
         rules.classList.remove("show");
         if(!rules.classList.contains("show")){
          swiper.style.transform = `translateX(90px)`;
          head.style.transform = `translateX(90px)`;
         }
} );