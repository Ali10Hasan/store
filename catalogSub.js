
let searchinput=document.querySelector("input");
let searchDiv=document.querySelector(".headerTools") 
let image=document.querySelectorAll(".Discount")
searchDiv.addEventListener("click",()=>{
  searchinput.focus();
})
//
const rulesButton = document.getElementById("rules-btn");
const closeButton = document.getElementById("close-btn");
const rules = document.getElementById("rules");
rulesButton.addEventListener("click", () => rules.classList.add("show"));
closeButton.addEventListener("click", () => rules.classList.remove("show"));

/////range inpute

let minprice=document.getElementById("min")
let maxprice=document.getElementById("max")
let btnCalc=document.getElementById("calcRange")

let imagesPrice=document.querySelectorAll(".price")
let imagesDiv=document.querySelectorAll(".image")

btnCalc.addEventListener("click",()=>{
    min=minprice.value;
    max=maxprice.value;

   for(let i=0;i<imagesDiv.length ;i++){
        if(+imagesPrice[i].innerHTML<+min || +imagesPrice[i].innerHTML > +max){
imagesDiv[i].style.display="none";
        }

    }
})


let back=document.getElementById("back")
back.addEventListener("click",()=>{
    location.reload();
}) ;
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////Sorting

//get input
let inputTypeSorting=document.getElementById("sorting");


//get Container
let containerImage=document.querySelector(".imagsContainer")


//Array Of Rates
let imagesRate=document.querySelectorAll("#star")
//Array of Whights
let imagesWhight=document.querySelectorAll(".weight")

//Array of prices
// let imagesPrice=document.querySelectorAll(".price")



//this  array is to store the sorting values
let prices=[];
let sizes=[];
for(let i=0;i<imagesPrice.length;i++)
{
prices.push(parseInt(imagesPrice[i].innerHTML))
}
for(let i=0;i<imagesPrice.length;i++)
{
sizes.push(parseInt(imagesWhight[i].innerHTML))
}


//this array is to store the divs of images after sorting
let imagesDiv1=[];
inputTypeSorting.addEventListener("change",()=>{
  if(inputTypeSorting.value == "Cheaper First")
  {
      prices.sort();
  
      for(let i=0; i<prices.length ;i++)
      {
  
        
          for(let j=0; j<prices.length ;j++)
          {
              if(parseInt(imagesPrice[j].innerHTML)==prices[i])
              {
              imagesDiv1.push(imagesDiv[j])
              }
          }
      }

    }
      else if(inputTypeSorting.value == "More Expensive At First"){
        prices.sort().reverse();
        for(let j=0;j<prices.length;j++){

          for(let k=0;k<prices.length;k++){
            if(parseInt(imagesPrice[k].innerHTML)==prices[j] ){
              imagesDiv1.push(imagesDiv[k]);
            }
          }
        }
      }
      else if(inputTypeSorting.value == "By Size"){
        sizes.sort();
        for(let j=0;j<sizes.length;j++){

          for(let k=0;k<sizes.length;k++){
            if(parseInt(imagesWhight[k].innerHTML)==sizes[j] ){
              imagesDiv1.push(imagesDiv[k]);
            }
          }
        }
      }
      //now we delet all the content of img from the body
      containerImage.innerHTML="";
    
 //thie step is to make a copy of the array that we are just sorting it
     imagesDiv=Array.from(imagesDiv1);

     //this loop is to fill the body of browser with image sorting again after clear them
     for(let t=0;t<prices.length;t++)
      {
        containerImage.appendChild(imagesDiv[t])
      }
  })
//Best Wishes Ali Hasan




let btn=document.querySelector("#btn");
let plus=document.querySelector(".plus");
let num=document.querySelector(".num");
let minus=document.querySelector(".minus");
let X=document.querySelector(".X");
let O=document.querySelector(".O");
let logo=document.querySelector(".HLogo");
let n=0;

btn.addEventListener("click",function(){
    let div =document.createElement("div");
    div.classList.add("buy");
    buy.style.display='flex'; 
    buy.style.height="60vh";
    buy.style.justifyContent = 'center';
    buy.style.alignItems = 'center';

  
   

});

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
X.addEventListener("click",function(){
    
    buy.style.display='none';
})
function taxi() {
    if(n>0){
        if (!logo.classList.contains("show")) {
            logo.classList.add("show");
            setTimeout(function() {
                    logo.classList.remove("show");
                    logo.classList.add("back");
                setTimeout(function(){
                        logo.classList.remove("back");
                },1000)
                
            }, 3000);
        }
    }
    }
    
O.addEventListener("click",function(){
    taxi();
});







