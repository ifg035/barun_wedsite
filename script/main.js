// nav_menu 
$(function(){
    $(".nav_menu li").mouseenter(function(){
        $(this).children(".sub_menu").stop().slideDown();
    })
    $(".nav_menu li").mouseleave(function(){
        $(this).children(".sub_menu").stop().slideUp();
    })


    //popup 
    $(".popup button").click(function(){
        $(".popup").css("display","none");
    })

    // $(".popup").setInterval(function(){
    // }, 3000);
    $('.forest').slick({
        autoplay:true,
        autoplaySpeed:4000,
        arrows:false,
    })


    //mobile nav
    let isMobile =screen.availWidth < 320 && screen.availWidth > 600;
    $(".mo-navbtn").on("click",function(){
        if(isMobile) {
            console.log("누름")
        }
    })

});


// media query