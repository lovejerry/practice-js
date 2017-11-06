var s = '233';
var a = typeof s;
if(typeof s)
    console.log(a);
else
    console.log(1);

console.log("");
console.log("js判断字符串真实字符数");
String.prototype.getlength = function()
{
    return this.replace(/[^/x00/-/xff]/ig, "aa").length;
}
//例子
console.log("我是Miller".getlength());
console.log("我是Miller".replace(/[^/x00/-/xff]/ig,"aa").length);