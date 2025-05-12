 const carousel1 =document.querySelector(".carousel1");
 firstImage=carousel1.querySelectorAll("img")[0];
 const arrowIcons1 =document.querySelectorAll(".wrapper1 svg");


let isDragStart1=false,isDraging1=false,prevPageX1,prevScrollLeft1,positionDiff1;


arrowIcons1.forEach(icon =>{
    icon.addEventListener("click",()=>{
        let firstImageWidth=firstImage.clientWidth +14;

carousel1.scrollLeft+=icon.id =="left"? -firstImageWidth :firstImageWidth;
setTimeout(()=>showHideIcons(),60)
})
})

const autoSlide1=()=>{
    if(carousel1.scrollLeft==(carousel1.scrollWidth - carousel1.clientWidth)){
return;
    }
positionDiff1=Math.abs(positionDiff1)
let firstImgWidth=firstImage.clientWidth + 14;
let valDefference=firstImgWidth - positionDiff1;
if(carousel1.scrollLeft > prevScrollLeft1)
{
    return carousel1.scrollLeft+=positionDiff1>firstImgWidth/3?valDefference:-positionDiff1;
}
carousel1.scrollLeft-=positionDiff1>firstImgWidth/3?valDefference:-positionDiff1;
}


const dragStart1=(e)=>{
    isDragStart1=true;
    prevPageX1=e.pageX || e.touched[0].pageX;
    prevScrollLeft1=carousel1.scrollLeft
}

 const dragging1=(e)=>{
    if(!isDragStart1)return;
    isDraging1=true;
    e.preventDefault();
    carousel1.classList.add("dragging");

     positionDiff1=(e.pageX || e.touched[0].pageX)-prevPageX1;
    carousel1.scrollLeft=prevScrollLeft1-positionDiff1;
    setTimeout(()=>showHideIcons(),60)

 }
 const dragStop1=()=>{
    isDragStart1=false;
    carousel1.classList.remove("dragging")
    if(!isDraging1)return;
    isDraging1=false;
    autoSlide1();
 }

carousel1.addEventListener("mousedown",dragStart1)
// carousel1.addEventListener("touchstart",dragStart1)

carousel1.addEventListener("mousemove",dragging1)
// carousel1.addEventListener("touchmove",dragging1)

carousel1.addEventListener("mouseup",dragStop1)
carousel1.addEventListener("mouseleave",dragStop1)
carousel1.addEventListener("touchend",dragStop1)




