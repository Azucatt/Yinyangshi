$(function () {
    let jie = true
    $('#elevator li').click(function () {
        jie = false
        let top = $('.item').eq($(this).index()).offset().top
        $('html,body').stop().animate({
            scrollTop: top-80
        }, () => {
            jie = true
        })
        $(this).addClass('curr').siblings().removeClass('curr')
    })
    $(window).scroll(function () {
        if ($(document).scrollTop() > ($('.item').first().offset().top)-150) {
            $('#elevator>ul').fadeIn()
            $('#backTop').stop().animate({ bottom: 60 }, 400)
        } else {
            $('#elevator>ul').fadeOut()
            $('#backTop').stop().animate({ bottom: -60 }, 400)
        }
        if (jie) {
            $('.item').each((index, element) => {
                if ($(document).scrollTop() >= $(element).offset().top-80) {
                    $('#elevator li').removeClass('curr').eq(index).addClass('curr')
                }
            })
        }
    })
    $('#backTop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 600);
    })
})