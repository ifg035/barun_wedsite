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
        dots:true
    })
});


// media query