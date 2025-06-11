/* JS Document */
/*****************************
copy  weixin  ID ,add weixin 
*****************************/
$(document).ready(function () {
        var clipboard = new Clipboard('#copy_btn');
        clipboard.on('success', function (e) {
            alert("微信号复制成功", 1500);
            window.location.href = 'weixin://';
            e.clearSelection();
            console.log(e.clearSelection);
        });
    });