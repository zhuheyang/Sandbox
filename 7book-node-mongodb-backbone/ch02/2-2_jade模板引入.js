var express = require('express');
var app = express();

//新增app.set三行代码:告诉Express所有视图都存放在命名为'views'的目录下,
//相对于代码文件运行(-dirname)的下级目录
app.set('view engine', 'jade');
app.set('view options', {layout: true});
app.set('views', __dirname + '/views');

app.get('/stooges/:name?', function(req, res, next){
	var name = req.params.name;

	switch(name ? name.toLowerCase() : ''){
		case 'larry':
		case 'curly':
		case 'moe':
			res.render('stooges', {stooges: name});
			break;

		default:
			next();
	}
});

app.get('/stooges/*?', function(req, res){
	res.render('stooges', {stooge: null});
});


app.get('/?', function(req, res){
	res.render('index');
});

var port = 8080;
app.listen(port);
console.log('Listening on port ' + port);

//Express渲染命令render会负责加载任何需要的模板模块,则即便没有提到或者实例化jade
//程序一样会正常运行!