window.addEventListener("scroll", function () {
    let updated_nav = document.querySelector("header");
    let windowPosition = window.scrollY > 60;
    updated_nav.classList.toggle("on_scrolling", windowPosition); 
    let newImageUrl = "images/logo2.png";
    //for logo Changes
    if (window.scrollY > 60) {
    	header.img.attr("src", newImageUrl);
    }
    a.img.src = newImageUrl;
    // if (window.scrollY < 50) {
    // 	$(".on_scrolling .logo img").attr("src", "images/logo2.png");
    // }

});
