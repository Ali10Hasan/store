 const carousel =document.querySelector(".carousel ");
 firstImage=carousel.querySelectorAll("img")[0];
 const arrowIcons =document.querySelectorAll(".wrapper svg");


let isDragStart=false,isDraging=false,prevPageX,prevScrollLeft,positionDiff;


arrowIcons.forEach(icon =>{
    icon.addEventListener("click",()=>{
        let firstImageWidth=firstImage.clientWidth +14;

carousel.scrollLeft+=icon.id =="left"? -2*firstImageWidth :2*firstImageWidth;

})
})

const autoSlide=()=>{
    if(carousel.scrollLeft==(carousel.scrollWidth - carousel.clientWidth)){
return;
    }
positionDiff=Math.abs(positionDiff)
let firstImgWidth=firstImage.clientWidth + 14;
let valDefference=firstImgWidth - positionDiff;
if(carousel.scrollLeft > prevScrollLeft)
{
    return carousel.scrollLeft+=positionDiff>firstImgWidth/3?valDefference:-positionDiff;
}
carousel.scrollLeft-=positionDiff>firstImgWidth/3?valDefference:-positionDiff;
}


const dragStart=(e)=>{
    isDragStart=true;
    prevPageX=e.pageX || e.touched[0].pageX;
    prevScrollLeft=carousel.scrollLeft
}

 const dragging=(e)=>{
    if(!isDragStart)return;
    isDraging=true;
    e.preventDefault();
    carousel.classList.add("dragging");

     positionDiff=(e.pageX || e.touched[0].pageX)-prevPageX;
    carousel.scrollLeft=prevScrollLeft-positionDiff;
 

 }
 const dragStop=()=>{
    isDragStart=false;
    carousel.classList.remove("dragging")
    if(!isDraging)return;
    isDraging=false;
    autoSlide();
 }

carousel.addEventListener("mousedown",dragStart)
carousel.addEventListener("touchstart",dragStart)

carousel.addEventListener("mousemove",dragging)
carousel.addEventListener("touchmove",dragging)

carousel.addEventListener("mouseup",dragStop)
carousel.addEventListener("mouseleave",dragStop)
carousel.addEventListener("touchend",dragStop)




