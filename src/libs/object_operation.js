const operation = {}
import $ from './util' // 1、在这里引入axios
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

String.prototype.replaceAll = function(s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2);
}

function obj2key(obj, keys) {
    var n = keys.length,
        key = [];
    while (n--) {
        key.push(obj[keys[n]]);
    }
    return key.join('|');
}


//去重操作  
operation.uniqeByKeys = function (array, keys) {
    var arr = [];
    var hash = {};
    for (var i = 0, j = array.length; i < j; i++) {
        var k = obj2key(array[i], keys);
        if (!(k in hash)) {
            hash[k] = true;
            arr.push(array[i]);
        }
    }
    return arr;
}
//处理图片在PC于手机端的自适应
operation.resizeimg = function () {
    for (
        let i = 0;
        i < document.querySelectorAll("div .el-card").length;
        i++
    ) {
        if (document.querySelectorAll("img")[i].width >= document.querySelectorAll("div .el-card")[0].clientWidth) {
            let weight = (document.querySelectorAll("img")[i].height / document.querySelectorAll("img")[i].width)
            document.querySelectorAll("img")[i].width = (document.querySelectorAll("div .el-card")[0].clientWidth) * 0.96
            document.querySelectorAll("img")[i].height = weight * (document.querySelectorAll("div .el-card")[0].clientWidth) * 0.96;
        }
    }
}


//模式匹配,修改富文本编辑器图片bug
operation.showimg = function (html5) {
    var imgstemp = new Array()
    var imgs = new Array()

    imgs = html5.match(/<img[^>]+>/g);
    var imgstemp2 = [].concat(imgs);

    if (imgs === null) {
        return html5
    } else {
        for (let i = 0; i < imgs.length; i++) {

            if (imgs[i].indexOf("images/") === -1) {

            } else {
                imgstemp[i] = "src=\"" + $.imgPath + "/user/images/" + imgs[i].match(/src="[^"]+/g)[0].split("/")[imgs[i].match(/src="[^"]+/g)[0].split("/").length - 1];

                imgs[i] = imgs[i].replace(/src="[^"]+/g, imgstemp[i]);
            }
        }
        for (let j = 0; j < imgs.length; j++) {
            html5 = html5.replace(imgstemp2[j], imgs[j]);
        }

        return html5
    }

}

//模式匹配,修改富文本编辑器内部图片bug
operation.showimg2 = function (html5) {
    var imgstemp = new Array()
    var imgs = new Array()

    imgs = html5.match(/<img[^>]+>/g);
    var imgstemp2 = [].concat(imgs);

    if (imgs === null) {
        return html5
    } else {
        for (let i = 0; i < imgs.length; i++) {

            if (imgs[i].indexOf("images/") === -1) {

            } else {
                imgstemp[i] = "src=\".." + $.imgPath + "/user/images/" + imgs[i].match(/src="[^"]+/g)[0].split("/")[imgs[i].match(/src="[^"]+/g)[0].split("/").length - 1];

                imgs[i] = imgs[i].replace(/src="[^"]+/g, imgstemp[i]);
            }
        }
        for (let j = 0; j < imgs.length; j++) {
            html5 = html5.replace(imgstemp2[j], imgs[j]);
        }

        return html5
    }

}
//响应式布局

operation.reactive = function () {
    var size = 1;
    var screenWidth = document.documentElement.clientWidth; //窗口宽度
    var screenHeight = document.documentElement.clientHeight; //窗口高度
    window.onresize = function () {
        // 定义窗口大小变更通知事件
        screenWidth = document.documentElement.clientWidth; //窗口宽度
        screenHeight = document.documentElement.clientHeight; //窗口高度
        if (screenWidth >= 1700) {
            size = 3;
        } else if (screenWidth < 1700 && screenWidth >= 1200) {
            size = 2;
        } else if (screenWidth < 1200 && screenWidth >= 0) {
            size = 1;
        }
    };
    if (screenWidth >= 1700) {
        size = 3;
    } else if (screenWidth < 1700 && screenWidth >= 1200) {
        size = 2;
    } else if (screenWidth < 1200 && screenWidth >= 0) {
        size = 1;
    }
    return size;
}

// //模式匹配,修改富文本编辑器图片bug
// operation.showimg=function(html5){
//     var imgstemp= new Array()
//     var imgs=new Array()
//      imgs = html5.match(/<img[^>]+>/g);
//      console.log(imgs)
//      if(imgs===null){
//          return html5
//      }else{
//         for(let i=0;i<imgs.length;i++){

//             if(imgs[i].indexOf("user/images")===-1){

//             }else{
//                 imgstemp[i]="src=\""+$.imgPath+"/user/images/"+imgs[i].match(/src="[^"]+/g)[0].split("/")[imgs[i].match(/src="[^"]+/g)[0].split("/").length-1];
//                 imgs[i]=imgs[i].replace(/src="[^"]+/g,imgstemp[i]);
//             }


//         }
//         html5=html5.replace(/<img[^>]+>/g,imgs);
//         return html5 
//      }

// }





export default operation;