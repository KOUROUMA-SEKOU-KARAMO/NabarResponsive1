

const btnShow=document.querySelector("header .btn-action .btn-show")
const heightScreen=window.innerWidth
// if(heightScreen<540){

    btnShow.addEventListener("click",function(e){
        document.querySelector("header .btn-action .btn-show").style.display="none"
        document.querySelector("header .btn-action .btn-hiden").style.display="flex"
        document.querySelector("header nav ul").classList.add("show-nav-links")
    
    })
// }else{

//     document.querySelector("header nav .show-nav-links").classList.remove("show-nav-links")
// }



const btnHiden=document.querySelector("header .btn-action .btn-hiden")

btnHiden.addEventListener("click",function(e){
    document.querySelector("header .btn-action .btn-show").style.display="flex"
    document.querySelector("header .btn-action .btn-hiden").style.display="none"
    document.querySelector("header nav ul").classList.remove("show-nav-links")


})