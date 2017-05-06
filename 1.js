

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
	var log1 = arr[5];

	console.log("第一条记录：" + log1);


	// 对记录再次分割
	var arr2 = log1.split(",");

	// 得到时间， arr2 最后一个
	var t = arr2[arr2.length - 1];
	console.log("第一条记录的时间：" + t);
	
});



