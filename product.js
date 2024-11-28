var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menu")
var close=document.getElementById("close-nav")


menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})



close.addEventListener("click",function(){
    sidenav.style.right="-50%"
})




var searchbox=document.getElementById("search")
var container=document.getElementById("product-cont")
var newdiv=container.querySelectorAll("div")

searchbox.addEventListener("keyup",function(){
    var entered=event.target.value.toUpperCase()
    
    for(count=0;count<newdiv.length;count=count+1)
    {
        var productlist=newdiv[count].querySelector("h1").textContent
        if(productlist.toUpperCase().indexOf(entered)<0)
        {
            newdiv[count].style.display="none"

        }
        else{
            newdiv[count].style.display="block"
        }
    }
})