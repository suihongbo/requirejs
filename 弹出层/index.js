/**
 * Created by mac on 2017/12/10.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
require(['jquery','dialog1'],function ($,dialog) {
    $('#btn').on('click',function () {
        dialog.open({
            width: 400,
            height: 300,
            title:'MINU 999',
            content:'part.html',
        });
    });
});
