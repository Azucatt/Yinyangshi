$(function(){
    $(".jiantou").addClass("youjiantou")
    let flag = true
    $('.Expand').click(function(e){

        e.preventDefault()
        if(flag){
            $(".hideDL").stop().animate({right:-155},300)
            $(this).find('span').html('展开')   
            $(".jiantou").removeClass('youjiantou').addClass("zuojiantou")
        }
        else{
            $('.hideDL').stop().animate({right:0},300)
            $(".jiantou").removeClass('zuojiantou').addClass("youjiantou")
            $(this).find('span').html('收起')
        }
        flag=!flag
    })
})
//轮播图
