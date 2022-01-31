window.addEventListener("scroll", function () {
    let updated_nav = document.querySelector("header");
    let windowPosition = window.scrollY > 60;
    updated_nav.classList.toggle("on_scrolling", windowPosition); 
    let new_logo = document.querySelector("img");
    if(windowPosition){
        new_logo.src =  ("../images/logo2.png") 
    }else{
        new_logo.src =  ("../images/logo.png")
    }
});
