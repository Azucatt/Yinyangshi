$(function(){
    $("#box li:first")
    .animate({width:520},400)
    .find('#paly').animate({opacity: 0},400)
    $("#box li").hover(function(){
        $(this)
        .stop().animate({width:520+'px'},400)
        .find('#paly').stop().animate({opacity: 0},400)
        .parent().siblings().stop().animate({width:230},400)
        .find('#paly').stop().animate({opacity: .8},400)

    },function(){})
})
