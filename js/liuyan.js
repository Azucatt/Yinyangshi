var ul = document.querySelector('ul');
var text = document.querySelector('textarea');
var btn = document.querySelector('button');

btn.onclick = function() {
    if (text.value == '') {
        alert('您没有输入内容');
        return false;
    }else {
        var li = document.createElement('li');
        li.innerHTML = text.value + "<a href='javascript:;'>删除</a>";
        ul.insertBefore(li,ul.children[0]);
        var as = document.querySelectorAll('a');
        for (var i = 0;i < as.length;i++) {
            as[i].onclick = function() {
                ul.removeChild(this.parentNode);
            }
        }
    }
}
