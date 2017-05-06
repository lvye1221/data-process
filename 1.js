// var ss = "2017/2/9 8:57";
// var reg = /\d{4}\/\d+\/\d+\s(\d+):(\d+)/i;

// var r = ss.match(reg);

// console.log(r[1]);
// console.log(r[2]);


// 获取时间字符串中的 小时 和 分钟
function getHourAndMinute(ss) {

	var reg = /\d{4}\/\d+\/\d+\s(\d+):(\d+)/i;

	var r = ss.match(reg);

	// 一个函数不能返回两个数值
	// 1. 可以放到数组中
	// 2. 可以放到对象中
	// return [r[1], r[2]];

	var obj = {};
	obj.hour = r[1];
	obj.min = r[2];

	return obj;
}

// var ss = "2017/2/9 8:57";

// console.log( getHourAndMinute(ss) );



















// var str = "a,b,c";

// console.log(str);

// charAt 是 string 对象提供的方法
// console.log(str.charAt(2));


// split 是 string 对象提供的方法

// var a = str.split(",")

// console.log(a);


























// 读文件
var fs = require("fs");

fs.readFile("1.txt", "utf8", function(err, data) {

	// str 就是文件的内容，每条记录都是以换行符分割的
	// 换行符  \n
	var str = data;

	// 字符串, 按照换行符分割，得到每条打卡记录
	var arr = str.split("\n");


	// 打印记录条数
	console.log("记录总数：" + arr.length);

	// 查看第一条记录
	var log1 = arr[0];

	console.log("第一条记录：" + log1);


	// 对记录再次分割
	var arr2 = log1.split(",");

	// 得到时间， arr2 最后一个
	var t = arr2[arr2.length - 1];
	console.log("第一条记录的时间：" + t);


	// 获取时间字符串中的 小时 和 分钟
    var obj = getHourAndMinute(t);

	// obj.hour 就是 打卡的小时数， obj.min 就是 打卡的分钟数

	if (obj.hour > 9) {
		console.log("迟到了");
	} else if (obj.hour == 9 && obj.min > 0) {
		console.log("迟到了");		
	} else {
		console.log("没有迟到");
	}

	
});



