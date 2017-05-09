var path = require('path');
var express = require('express');
var session = require('express-session');
var flash = require('connect-flash');
var config = require('config-lite');
var routes = require('./routes');
var pkg = require('./package');
var app = express();
var formidable = require('express-formidable');

require('events').EventEmitter.prototype._maxListeners = 900;
// path set
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());

//egine set
var cons = require('consolidate');

// app.engine('html', cons.swig)
app.set('view engine', 'ejs');


// 设置模板全局常量
app.locals.timer = {
  title: pkg.name,
  description: pkg.description
};

app.use(formidable());


// 添加模板必需的三个变量
// 路由
routes(app);

// 监听端口，启动程序
app.listen(config.port, function () {
  console.log(`${pkg.name} listening on port ${config.port}`);
});
