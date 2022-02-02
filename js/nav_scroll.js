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
$('.client_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 2,
    prevArrow: '<i class = "fas fa-angle-left  previous_arrow"></i>',
    nextArrow: '<i class = "fas fa-angle-right  next_arrow"></i>',
    mobileFirst: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false
        }
    }]
  });
