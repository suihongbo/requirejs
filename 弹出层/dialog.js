/**
 * Created by mac on 2017/12/10.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
define(['jquery'],function () {
    return{
        open:function (arg) {
            var _this = this ;
            this.defaultValue = {
                width:800,
                height:600,
            }
            var html = '<div class="mask">'
                            +'<div class="container">'
                                +'<div class="title">'
                                    +'<h2>'
                                        +'MINU 9 视频'
                                    +'</h2>'
                                    +'<span class="close">×</span>'
                            +'</div>'
                                +'<div class="content">'
                                    +'<img src="img/tccd47f7a1895b0da1f58ff28095c1babed.png" alt="">'
                                +'</div>'
                            +'</div>'
                        +'</div>';
            $('body').append(html);
            var value = $.extend(this.defaultValue,arg);
            $('.container').css({
                width: value.width,
                height: value.height,
                marginLeft: -value.width/2,
                marginTop: -value.height/2,
            });
            $('.title h2').html(arg.title);
            $('.container').animate({
                top: '50%',
            });
            $('.close').on('click',function () {
                _this.close();
            });
        },
        close:function () {
            $('body').on('click','.close',function () {
                $('.mask').remove();
            });
        },
    }
});