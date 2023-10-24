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

})


// media query