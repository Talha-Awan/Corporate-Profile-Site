var myNav = document.getElementById("nav");
window.onscroll=function(){
    "use strict";
    if (document.body.scrollTop>=400||document.documentElement.scrollTop>=400){
        myNav.classList.remove("bg-transparent");
        myNav.classList.add("bg-dark");
    }
    else {
        myNav.classList.remove("bg-dark");
        myNav.classList.add("bg-transparent");
    }
}