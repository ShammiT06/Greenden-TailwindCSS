var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menu")
var close=document.getElementById("close-nav")


menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})



close.addEventListener("click",function(){
    sidenav.style.right="-50%"
})