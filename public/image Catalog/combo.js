const rulesButton = document.getElementById("rules-btn");
const closeButton = document.getElementById("close-btn");
const rules = document.getElementById("rules");
let head1=document.querySelector(".head1");
let minprice=document.getElementById("min")
let maxprice=document.getElementById("max")
let btnCalc=document.getElementById("calcRange")
let combo=document.querySelectorAll(".combo1")
let imagesPrice=document.querySelectorAll(".products .combo1 .price")
let imagesDiv=document.querySelectorAll(".products .combo1 .image")
let details=document.querySelector(".details");
let product=document.querySelectorAll(".products");

let imgs=document.querySelectorAll(".products .combo1 img");

let back=document.getElementById("back")
back.addEventListener("click",()=>{
    location.reload();
}) ;
   /////////////////////////////////////////////////////////////
//Sorting

let inputTypeSorting=document.getElementById("sorting");

let imagesRate=document.querySelectorAll("#star")
let imagesWhight=document.querySelectorAll(".weight")



let cheaper=document.querySelector(".Cheaper")
let More=document.querySelector(".More")
let Size=document.querySelector(".Size")
let Rating=document.querySelector(".Rating")

let prices=[];
for(let i=0;i<imagesPrice.length;i++)
{
prices.push(parseInt(imagesPrice[i].innerHTML))
}

inputTypeSorting.addEventListener("change",()=>{
        if(inputTypeSorting.value == "Cheaper First")
        {
            prices.sort();
            let imagesDiv1=[];
            for(let i=0; i<prices.length ;i++)
            {
              
                for(let j=0; j<prices.length ;j++)
                {
                    if(parseInt(imagesPrice[i].innerHTML)==prices[j])
                    {
                    imagesDiv1.push(imagesDiv[j])
                    }
                }
            }
for(let t=0 ;t<imagesDiv.length ;t++)
    {
        imagesDiv[t]=imagesDiv1[t];
    }
    console.log(imagesDiv1)            
        }
})

/////////////////////////////////////////////////////////////

// let Div=document.createElement("div");
// Div.classList.add("produc");
btnCalc.addEventListener("click",()=>{
    min=minprice.value;
    max=maxprice.value;

  
    for (let i = 0; i < imagesDiv.length; i++) {
        if (parseInt(imagesPrice[i].innerHTML) < parseInt(min) || parseInt(imagesPrice[i].innerHTML) > parseInt(max)) {
            combo[i].style.display = "none";
            imgs[i].style.width=0;
            imgs[i].style.height=0;
        } else {
            combo[i].style.display = "block";
           
        }
    }

});

details.style.transform=`translateX(500px)`;
head1.style.transform = `translateX(421px)`;
rulesButton.addEventListener("click", function() {
    rules.classList.add("show");
    head1.style.transform = `translateX(481px)`;
    details.style.transform=`translateX(570px)`;
});
closeButton.addEventListener("click", function(){
    rules.classList.remove("show");
    head1.style.transform = `translateX(90px)`;
    details.style.transform=`translateX(400px)`;
} );




