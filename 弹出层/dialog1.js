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
            var _this = this;
            this.defaultValue = {
                width:800,
                height:600,
            }
            var value = $.extend(this.defaultValue,arg);
            var $mask = $('<div class="mask"></div>');
            var $container = $('<div class="container"></div>');
            var $title = $('<div class="title"></div>');
            var $h2 = $('<h2></h2>');
            var $close = $('<span class="close">×</span>')
                .on('click',function () {
                    _this.close();
                });
            var $content = $('<div class="content"></div>');

            $container.appendTo($mask).append($title).append($content)
                .css({
                    width: value.width,
                    height: value.height,
                    marginLeft: -value.width/2,
                    marginTop: -value.height/2,
                });
            $title.append($h2).append($close);
            $h2.html(value.title);
            $content.load(value.content);
            $('body').append($mask);
        },
        close:function () {
            $('body').on('click','.close',function () {
                $('.mask').remove();
            });
        },
    }
});