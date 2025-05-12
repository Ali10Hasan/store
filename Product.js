let searchinput=document.querySelector("input");
let searchDiv=document.querySelector(".headerTools") 
let plus=document.querySelector(".plus");
let num=document.querySelector(".num");
let minus=document.querySelector(".minus");
let n=0;

searchDiv.addEventListener("click",()=>{
  searchinput.focus();
})

let btn=document.querySelector(".btn2");
let country=document.querySelector(".country1");
let Squirrels=document.querySelector(".Squirrels1");
let Div=document.querySelector(".Div");
window.onload=function (){
    country.style.display='none';
    Squirrels.style.display='none';
}
btn.onclick=function(){Block()

}
function Block()
{
    if(Div.classList.contains("active"))
        {   country.style.display='none';
            Squirrels.style.display='none';
            Div.classList.remove("active")
        }else{
            country.style.display='block';
            Squirrels.style.display='block';
            Div.classList.add("active")
        } 
} 
plus.addEventListener("click",function(){
    n++;
    num.textContent=n;
        
})
minus.addEventListener("click",function(){
    if(n!==0){
        n--;
        num.textContent=n;
    }
})
let cart=document.querySelector(".cart");
let box=document.querySelector(".box");
box.addEventListener("click",()=>{
    if(    cart.style.display=="none"  )
        cart.style.display="block";
else{
    cart.style.display="none";

}
});
let addToCart=document.querySelector(".btn1");
let addToCart1=document.querySelector(".btn2");
let SYR=document.querySelector(".SYR");
let SY=document.querySelector(".SY");
let c1=document.querySelector(".c1");
let result=document.querySelector(".result");
let rabbich=document.querySelector(".ra");
let desc=document.querySelector(".information");

addToCart.addEventListener("click",()=>{
  if(n>0)
    {
        cart.style.display="block";
        let tmp=SYR.textContent;
        SY.textContent=tmp;
        c1.textContent=n;
        let calculate= +tmp * +n;
        result.textContent=calculate;
    }  
    rabbich.addEventListener("click",function(){
        desc.textContent=" ";
        num.textContent=0;
    })
})
let image=document.querySelector(".image>img");
let images=document.querySelectorAll(".images img");
images.forEach(function(e){
    e.addEventListener("click",function(){
      let src1=  e.getAttribute("src");
      image.src=src1;
    })
})
image.onclick=function(){
    
}