function tab(tab_nav, hover, tab_con, number) {
    number = (typeof (number) == 'undefined') ? 0 : number;
    $('#tab_nav label').eq(number).addClass(hover).siblings("label").removeClass(hover);
    $('#' + tab_con + '>div').eq(number).show().siblings('div').hide();

    let $div_label = $('#tab_nav label');
    $div_label.click(function () {
        $(this).addClass(hover).siblings('label').removeClass(hover);
        $('#' + tab_nav + ' radio').removeAttr('checked', 'checked');
        let index = $div_label.index(this);
        $('#' + tab_nav + ' radio').eq(index).attr('checked', 'checked');
        $('#' + tab_con + '>div').eq(index).show().siblings('div').hide();
    })
}
tab('tab_nav', 'fa', 'tab_con', 0);
//登陆验证
$(document).ready(function () {
    //用户名框失去焦点
    $('#username').blur(function () {
        $(this).next().remove();
        if (!$(this).val()) {
            $(this).after($('<p>').text('用户名不能为空'));
        }
    });

    //密码输入框失去焦点
    $('#password').blur(function () {
        $(this).next().remove();
        if (!$(this).val()) {
            $(this).after($('<p>').text('密码不能为空'));
        }
    });

    //点击提交按钮
    $('#login_btn').click(function (e) {
        e.preventDefault()
        if (!$('#username').val()) {
            $('#username').blur();
            return;
        }

        if (!$('#password').val()) {
            $('#password').blur();
            return;
        }

        if ($('#username').val() != 'admin') {
            alert('用户名错误');
            return;
        }
        if ($('#password').val() != '12345678') {
            alert('密码错误');
            return;
        }
        alert('登录成功');
        $(location).attr('href','liuyan.html');
    });

});
