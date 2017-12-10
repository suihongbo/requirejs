/**
 * Created by mac on 2017/12/10.
 */
/*require(['add'],function (add1) {
    console.log(add1(4,5));
});*/
require(['sortArray'],function (sortArray) {
    var arr = [23,21,12,3,4,53,2,43];
    var obj = {
        name: 'zhangsan',
        age: 20,
    }
    console.log(sortArray(arr));
    console.log(obj);
    console.log(sortArray(obj));
    console.log(sortArray('asdfgh'));
});