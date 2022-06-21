$(document).ready(
    function() {
        $(window).scroll(
            function() {
                console.log($(window).scrollTop());
                $(".main-title").css("opacity", 1 - $(window).scrollTop()/500);
                $(".hoba-png").css("right", $(window).scrollTop()*2+"px");
                $(".hoba-png").css("top", $(window).scrollTop()/2+"px");
            }
        );
    }
);