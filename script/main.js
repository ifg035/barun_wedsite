// nav_menu 
$(function(){
    $(".nav_menu li").mouseenter(function(){
        $(this).children(".sub_menu").stop().slideToggle();
    })
    $(".nav_menu li").mouseleave(function(){
        $(this).children(".sub_menu").stop().slideToggle();
    })


    //popup 
    
    $(".popup button").click(function(){
        $(".popup").css("display","none");
    })

    $('.forest').slick({
        autoplay:true,
        autoplaySpeed:4000,
        arrows:false,
    })


    //mobile nav
    // menu button 클릭시 nav를 on,off를 하면서
    // =를 x로, x를 =로 변경
    let isMobile =screen.availWidth > 320 && screen.availWidth <= 393;
    let isClicked = true;
    $(".mo-navbtn").on("click", function(){
        if(isMobile) {
            //눌렀을때 :(최초) =를 x로, 그러면서 nav를 보여주고
            // 한 번 더 클릭했을떄 : x를 =로 바꾸고,nav를 감추기
            if(isClicked){
                $(".mo-navbtn span").text("close");
                $(".nav").css("display","block");
                isClicked = false;
            } else{
                $(".mo-navbtn span").text("menu");
                $(".nav").css("display","none");
                isClicked = true;
            }  
        }
    })

});


// media query