// 4.reject
// reject的作用就是把Promise的状态置为rejected.这样我们在then中就能捕捉到，然后执行“失败”情况的回调。

function getNumber(){
  var p = new Promise(function(resolve, reject){
    //做一些异步操作
    setTimeout(function(){
      var num = Math.ceil(Math.random()*10); //生成1-10的随机数
      if(num<=5){
        resolve(num);
      } else{
        reject('数字太大了', num);
      }
    }, 2000);
  });
  return p;
}

getNumber()
  .then(
    function(data){
      console.log('resolved');
      console.log(data);
    },
    function(reason, data){
      console.log('rejected');
      console.log(reason);
      console.log(data);
    }
  );