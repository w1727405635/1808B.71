// url 查询字符串转对象
// let urlstr = location.search;

let urlstr = '?name=1&age=3'
function UrltoObj(str){
    str = str.slice(1)
    strary = str.split("&")
    strary.forEach(item =>{
        item = item.split('=')
        // item ['name','1'],[age:3] 数组的第0项
        obj[item[0]]=item[i]
    });
    return obj
}
let res = UrltoObj