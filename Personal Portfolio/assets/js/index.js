// ^ Write your JavaScript code here




//--------------Carousel-------------//


var CardsArr=document.querySelectorAll(".testimonial-card")

var FinalRightIndex=0;
var FinalLeftIndex=2;

var RightBtn=document.getElementById("prev-testimonial")
var LeftBtn=document.getElementById("next-testimonial")
var Indicator=document.querySelectorAll(".carousel-indicator")
var ActiveIndicator=0;
unSelectAll();
SelectRange();

RightBtn.addEventListener("click",function()
{
    if(FinalRightIndex!=0)//natural move for normal position ("all elements move by one card")
    {
         CardsArr[FinalRightIndex].classList.add("moveLeft")
         CardsArr[FinalRightIndex+1].classList.add("moveLeft")
         CardsArr[FinalLeftIndex].classList.add("moveLeft");
         setTimeout(function()
         {
            FinalLeftIndex--;
            FinalRightIndex--;
            unSelectAll();
            SelectRange();
            
         },800);
       
    }
    else//Full move out (all elements move by entire row "out of seen"),when right is at edge (i)
    {
        CardsArr[FinalRightIndex].classList.add("FullMoveRight")
        CardsArr[FinalRightIndex+1].classList.add("FullMoveRight")
        CardsArr[FinalRightIndex+2].classList.add("FullMoveRight")
        
        setTimeout(function()
        {
            FinalRightIndex=3;
        FinalLeftIndex=5;
        unSelectAll()
        SelectRange()
        
        },500);

    }


})
LeftBtn.addEventListener("click",function()
{
    if(FinalLeftIndex!=5)
    {
        CardsArr[FinalRightIndex].classList.add("moveRight")
        CardsArr[FinalLeftIndex-1].classList.add("moveRight")
        CardsArr[FinalLeftIndex].classList.add("moveRight");
         setTimeout(function()
         {
            FinalLeftIndex++;
            FinalRightIndex++;
            unSelectAll();
            SelectRange();
            
         },800);
    }
    else
    {
       CardsArr[FinalRightIndex].classList.add("FullMoveLeft")
        CardsArr[FinalRightIndex+1].classList.add("FullMoveLeft")
        CardsArr[FinalRightIndex+2].classList.add("FullMoveLeft")
        
        setTimeout(function()
        {
            FinalRightIndex=0;
        FinalLeftIndex=2;
        unSelectAll()
        SelectRange()
        
        },500);

    }

})

Indicator[ActiveIndicator].classList.remove("dark:bg-slate-600")
for(var i=0;i<Indicator.length;i++)
{
    Indicator[i].addEventListener("click",function()
    {
        IndicatorSelect(this);
    })
}
function setActiveIndicator(index)
{
    Indicator[ActiveIndicator].classList.add("dark:bg-slate-600")
    ActiveIndicator=index
    Indicator[ActiveIndicator].classList.remove("dark:bg-slate-600")
}
function IndicatorSelect(indicator)
{
    setActiveIndicator(Number(indicator.getAttribute("data-index")))

    
    FinalRightIndex=Number(indicator.getAttribute("data-index"))
    FinalLeftIndex=Number(FinalRightIndex+2);
    console.log("FinalRightIndex:"+FinalRightIndex,"FinalLeftIndex:"+FinalLeftIndex)
    unSelectAll()
    SelectRange()
}

function unSelectAll()
{

    for(var i=0;i<CardsArr.length;i++)
        {
            CardsArr[i].classList.remove("moveRight");
            CardsArr[i].classList.remove("moveLeft");
            CardsArr[i].classList.remove("FullMoveLeft");
            CardsArr[i].classList.remove("FullMoveRight");
            CardsArr[i].classList.add("dis-none");
        }
}

function SelectRange()
{
    setActiveIndicator(FinalRightIndex)
    for(var i=FinalRightIndex;i<=FinalLeftIndex;i++)
        {
            CardsArr[i].classList.remove("dis-none")
        }
}

//----------------------------------//


//--------navs & Tabs -------------//

var portoItems = document.querySelectorAll(".portfolio-item")
var webBtn = document.getElementById("webButton");
var TabsBtns = document.querySelectorAll(".portfolio-filter")
var ActiveTab =TabsBtns[0];
for (var i = 0; i < TabsBtns.length; i++) 
{
    console.log(TabsBtns[i] +"is index at "+i)
    TabsBtns[i].addEventListener("click", function (e) 
    {
        
        
       ActiveTab.classList.remove("active")

       e.target.classList.add("active")

       ActiveTab=e.target;

       
        filtering(this)
  
    })
    

}
function flashed(item)
{

        item.classList.add("dis-flash")
    
}
function filtering (filter)
{
    setTimeout(function()
    {for (var j = 0; j < portoItems.length; j++) 
        {
        
           flashed(portoItems[j])
          
            portoItems[j].classList.remove("hidden");
            console.log("at index "+j+":")
            console.log(portoItems[j].getAttribute("data-category") , filter.getAttribute("data-filter") )
            if(filter.getAttribute("data-filter")!='all')
            if (portoItems[j].getAttribute("data-category") != filter.getAttribute("data-filter"))
            {
                  portoItems[j].classList.add("duration-700");
                portoItems[j].classList.add("hidden");
            }
        
            
        }

    },200)
      

         for(var j = 0; j < portoItems.length; j++)
        {
            portoItems[j].classList.remove("dis-flash"); 

        }
        
        
}
//--------------------------------------//





/*---toogle sidebar setting----*/

var gearbtn = document.getElementById("settings-toggle");
var sidebar = document.getElementById("settings-sidebar");
var sidebarCloseBtn = document.getElementById("close-settings");
gearbtn.addEventListener("click", function () {
    gearbtn.classList.toggle("gearActivate")
    sidebar.classList.toggle("sidebarActivate")

}
)

sidebarCloseBtn.addEventListener("click", function () {
    gearbtn.classList.remove("gearActivate")
    sidebar.classList.remove("sidebarActivate")
})
//--------------------------//





//--------buttons for font type & color------------//
var TajBtn = document.getElementById("Tajawal");
var AlexBtn = document.getElementById("Alexandria");
var CairoBtn = document.getElementById("Cairo");

var purpleBlue=document.getElementById("purple_blue");
var OrgPink= document.getElementById("pink_orange"); 
var Blue_Cyan=document.getElementById("Blue_Cyan");
var Green_Emerald=document.getElementById("Green_Emerald");
var Red_Rose=document.getElementById("Red_Rose");
var AmbOrange=document.getElementById("Amber_Orange");


purpleBlue.addEventListener("click",function(){

        document.styleSheets.item(2).deleteRule(110)

    document.styleSheets.item(2).deleteRule(110);
    document.styleSheets.item(2).insertRule(
        `.active
{
    background-image: linear-gradient(to right,${this.getAttribute("data-primary")},${this.getAttribute("data-secondary")});
    
}`,110)
    document.styleSheets.item(2).insertRule(`.colorChanging{ background:linear-gradient(to left,${this.getAttribute("data-primary")} , ${this.getAttribute("data-secondary")});   background-clip: text;color:transparent;}`, 111)
    console.log(document.styleSheets.item(2).cssRules)
})
OrgPink.addEventListener("click",function(){
    document.styleSheets.item(2).deleteRule(110)
    document.styleSheets.item(2).deleteRule(110);
    document.styleSheets.item(2).insertRule(
        `.active
{
    background-image: linear-gradient(to right,${this.getAttribute("data-primary")},${this.getAttribute("data-secondary")});
    
}`,110)
    document.styleSheets.item(2).insertRule(`.colorChanging{ background:linear-gradient(to left,${this.getAttribute("data-primary")} , ${this.getAttribute("data-secondary")});   background-clip: text;color:transparent;}`, 111)
    console.log(document.styleSheets.item(2).cssRules)
})

Blue_Cyan.addEventListener("click",function(){

        document.styleSheets.item(2).deleteRule(110)

    document.styleSheets.item(2).deleteRule(110);
    document.styleSheets.item(2).insertRule(
        `.active
{
    background-image: linear-gradient(to right,${this.getAttribute("data-primary")},${this.getAttribute("data-secondary")});
    
}`,110)
    document.styleSheets.item(2).insertRule(`.colorChanging{ background:linear-gradient(to left,${this.getAttribute("data-primary")} , ${this.getAttribute("data-secondary")});   background-clip: text;color:transparent;}`, 111)
    console.log(document.styleSheets.item(2).cssRules)
})
Green_Emerald.addEventListener("click",function(){

        document.styleSheets.item(2).deleteRule(110)

    document.styleSheets.item(2).deleteRule(110);
    document.styleSheets.item(2).insertRule(
        `.active
{
    background-image: linear-gradient(to right,${this.getAttribute("data-primary")},${this.getAttribute("data-secondary")});
    
}`,110)
    document.styleSheets.item(2).insertRule(`.colorChanging{ background:linear-gradient(to left,${this.getAttribute("data-primary")} , ${this.getAttribute("data-secondary")});   background-clip: text;color:transparent;}`, 111)
    console.log(document.styleSheets.item(2).cssRules)
})

Red_Rose.addEventListener("click",function(){

        document.styleSheets.item(2).deleteRule(110)
                document.styleSheets.item(2).deleteRule(110)

    document.styleSheets.item(2).insertRule(
        `.active
{
    background-image: linear-gradient(to right,${this.getAttribute("data-primary")},${this.getAttribute("data-secondary")});
    
}`,110)
    document.styleSheets.item(2).insertRule(`.colorChanging{ background:linear-gradient(to left,${this.getAttribute("data-primary")} , ${this.getAttribute("data-secondary")});   background-clip: text;color:transparent;}`, 111)
    console.log(document.styleSheets.item(2).cssRules)
})

AmbOrange.addEventListener("click",function(){

        document.styleSheets.item(2).deleteRule(110)

    document.styleSheets.item(2).deleteRule(110);
    document.styleSheets.item(2).insertRule(
        `.active
{
    background-image: linear-gradient(to right,${this.getAttribute("data-primary")},${this.getAttribute("data-secondary")});
    
}`,110)
    document.styleSheets.item(2).insertRule(`.colorChanging{ background:linear-gradient(to left,${this.getAttribute("data-primary")} , ${this.getAttribute("data-secondary")});   background-clip: text;color:transparent;}`, 111)
    console.log(document.styleSheets.item(2).cssRules)
})


TajBtn.addEventListener("click", function () {
    document.styleSheets.item(2).deleteRule(109);
    document.styleSheets.item(2).insertRule("*{font-family: var(--Taj);}", 109)
    console.log(document.styleSheets.item(2).cssRules.item(109))

}
)
AlexBtn.addEventListener("click", function () {
    document.styleSheets.item(2).deleteRule(109);



    document.styleSheets.item(2).insertRule("*{font-family: var(--Alex);}", 109)
    console.log(document.styleSheets.item(2).cssRules)

}
)

CairoBtn.addEventListener("click", function () {
    document.styleSheets.item(2).deleteRule(109);
    
    document.styleSheets.item(2).insertRule("*{font-family: var(--cairo);}", 109)
    console.log(document.styleSheets.item(2).cssRules)
}
)

//-------------------Night-light mode-----------------------//

var themeBtn=document.getElementById("theme-toggle-button")
var state='light'

themeBtn.addEventListener('click',function()
{
    if(state==='dark')
    {
        state='light'
    }
    else
    {
        state='dark'
    }

    console.log(state)
    localStorage.setItem("theme",state)
  


  
document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
);


})
document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
);
    localStorage.removeItem("theme")

    
//---------notable errors---------//
/*
1-when using for-loop to addEventListener->don't use iterator inside the delegect of listener,

2-when using stylesheet.item(getting css objects) be carefull with deleteing.

if you need to delete index 109 and 110 repsectively
don't->delete(109);delete(110)
do->delete(109);delete(109)

when deleting ,autosizing compress happen to array, meaning that after deleteing 109 so 110 would take it's place


*/