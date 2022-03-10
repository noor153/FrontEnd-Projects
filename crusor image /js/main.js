myImage = document.querySelector("img")


document.addEventListener("mousemove",function(e){

    myImage.style.left=e.clientX +"px"
    myImage.style.top=e.clientY +"px"

    
})