var popUpRgba = document.querySelector(".popUpRgba")
var myImages = Array.from(document.querySelectorAll(".item img")) 
var close = document.getElementById("close")
var popUpChild = document.querySelector(".popUpRgba-child")
var currentIndex = 0;
var left = document.querySelector(".left")
var right = document.querySelector(".right")

right.addEventListener("click",rightArr)

close.addEventListener("click",hidePopUp )


left.addEventListener("click",leftArr)

document.addEventListener("keyup" , function(e){

    if (e.keyCode=39) {
        rightArr()
    }
    else if (e.keyCode=37) {
        leftArr()
    }
 

})

function rightArr(){


    currentIndex++;

    if(currentIndex>=myImages.length){
        currentIndex = 0;
    }
    popUpChild.style.backgroundImage="url("+myImages[currentIndex].src+")"

}

function leftArr(){


    currentIndex--;

    if(currentIndex < 0){
        currentIndex = myImages.length -1;
    }
    popUpChild.style.backgroundImage="url("+myImages[currentIndex].src+")"

}


function hidePopUp(){

    popUpRgba.style.display="none";

}

for(let i=0 ; i<myImages.length; i++)
{
    myImages[i].addEventListener("click",pop)

}


document.addEventListener("click",function(e){
    if(e.target == popUpRgba)
    {
        hidePopUp()
    }
})

function pop(e){

    popUpRgba.style.display="flex";
    popUpChild.style.backgroundImage = "url("+e.target.src+")"
    currentIndex = myImages.indexOf(e.target)
    
    console.log(currentIndex);

}



