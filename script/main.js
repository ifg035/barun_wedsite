// nav_menu 
$(function(){
    $(".nav_menu li").mouseenter(function(){
        $(this).children(".sub_menu").stop().slideDown();
    })
    $(".nav_menu li").mouseleave(function(){
        $(this).children(".sub_menu").stop().slideUp();
    })

})