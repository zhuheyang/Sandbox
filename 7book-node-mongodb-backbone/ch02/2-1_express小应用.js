var express = require('express');
var app = express();

//这里定义了三个路由:'/stooges/[name]','/stooges/' and '/'
//'/':这是默认路由用于访问应用程序主页;
//'/stooges/[name]':期待一个stooge(配角)的名字作为输入;
//'/stooges/':如果上一个路由提供的名字未找到,给出反馈信息'no stooges listed'

//':name'参数后面的问号表明'name'是一个可选输入,即便不提供'name',该路由也会加载.
app.get('/stooges/:name?', function(req, res, next){
	var name = req.params.name;

	switch( name ? name.toLowerCase() : '' ){
		case 'larry':
		case 'curly':
		case 'moe':
			res.send(name + ' is my favorite stooge.');
			break;

		default:
			next();
			//next是指一个函数,next命令指示Expres尝试处理匹配当前请求的下一个路由
			//在这里下一个路由是'/stooges/'
	}
})


app.get('/stooge/*?', function(req, res ){
	res.send('no stooges listed');
})

app.get('/?', function(req, res){
	res.send('hello world');
})

var port = 8080;
app.listen(port);
console.log('Listening on port' +  port);

/*
(name ? name.toLowerCase() : '')
这是一个三元操作符作为缩写的if/else语句.相当于一个较长的代码块;
检查变量name是否存在,如果存在返回小写字符串,否则返回一个空字符串''
if(null != name){
	name = name.toLowerCase();
}else{
	name = '';
}
*/