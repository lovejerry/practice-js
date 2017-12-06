// 2
function runAsync(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('执行完成');
            resolve('随便什么数据');
            reject('操作失败');
        }, 2000);
    });
    return p;
}
runAsync().then(function(data){
    console.log(data);
    //后面可以用传过来的数据做些其他操作
    //......
}, function (error) {
    console.log(error);
});

// 2.1 回调函数的方式
function runAsync2(callback, callback2){
    setTimeout(function(){
        console.log('执行完成-回调函数方式');
        callback('随便什么数据-回调函数方式');
        callback2('随便什么数据-回调函数方式-2');
    }, 2000);
}
runAsync2(function(data){
    console.log(data);
}, function (callback2) {
    console.log(callback2);
});

//回调函数方式可以执行多个回调函数，promise好像不行。

// 2.2 多层回调时，使用回调函数和promise实现对比

