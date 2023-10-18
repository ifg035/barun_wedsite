//3 nav_menu 
$(function(){
    $("nav_menu ul li").mouseenter(function(){
        $(this).children(".sub_menu").stop().slideDown();
    })
    $("nav_menu ul li").mouseleave(function(){
        $(this).children(".sub_menu").stop().slideUp();
    })
})