/**
 * Created by mac on 2017/12/10.
 */
define(['isArray'],function (isArray) {
    function sortArray(arr) {
        if(isArray(arr)){
            return arr.sort(function (a,b) {
                return a-b;
            });
        }else{
            return '请输入正确数组......';
        }
    }
    return sortArray;
})
