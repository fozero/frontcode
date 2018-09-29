
/**
* created at 18/4/22
* @author fozero
* @github https://github.com/fozero
*/
var gulp = require('gulp');



/**
* 1.编译less  2.处理浏览器前缀 3.生成sourcemaps
*/
var less = require("gulp-less");// less预编译
var postcss = require('gulp-postcss');//与autoprefixer一同使用 添加浏览器前缀
var sourcemaps   = require('gulp-sourcemaps');//-生成sourcemap文件 查看源代码排查问题
var autoprefixer = require('autoprefixer');//-添加浏览器前缀
var filter = require('gulp-filter');//解决css修改后浏览器无法刷新问题
gulp.task('less',function(){
	return gulp.src('./src/less/index.less')
		.pipe(less())
		.pipe(sourcemaps.init())
		.pipe(postcss([autoprefixer()]))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./src/css'))
		.pipe(filter('**/*.css')) // Filtering stream to only css files
		.pipe(browserSync.reload({stream: true})); 
});


/**
* 1.minify-css压缩（先执行less编译）  2.文件重命名 3.添加MD5后缀   4.生成rev-manifest.json文件
*/
var cleanCSS = require('gulp-clean-css');//-css压缩处理
var rename = require("gulp-rename");//-文件重命名
var rev = require('gulp-rev');         //- 对文件名加MD5后缀
gulp.task('minify-css',['less'],function(){
	return gulp.src('./src/css/*.css')
		.pipe(cleanCSS())   //压缩处理
		.pipe(rename({suffix:'.min'})) //文件重命名  suffix添加后缀   其他的还有prefix ， extname等
		.pipe(rev())         //- 文件名加MD5后缀
		.pipe(gulp.dest('./dist/css'))  //- 输出文件本地
		.pipe(rev.manifest())          //- 生成一个rev-manifest.json    后面的文件路径替换依据此文件内容
		.pipe(gulp.dest('./rev')); //- 将 rev-manifest.json 保存到 rev 目录内      
});

/**
* 1.文件引用路径替换(根据生成的rev-manifest.json文件)  2.执行该任务之前先minify-css压缩
*/
var revCollector = require('gulp-rev-collector');  //- 路径替换
gulp.task('rev', function() {
    return gulp.src(['./rev/*.json', './src/*.html'])   //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件
        .pipe(revCollector())                                   //- 执行文件内css名的替换
        .pipe(gulp.dest('./dist'));                     //- 替换后的文件输出的目录
});

/**
* 1.clean任务，删除文件及目录  2.任务执行之前先清空dist目录文件
*/
var del  = require('del');   //-删除文件及目录
gulp.task('clean',function(){
  return del(['./dist'],{force: true});
})


/**
* 静态服务器 + 监听 less/html 文件，浏览器自动刷新
*/
var browserSync = require('browser-sync').create();  //-开启静态服务，浏览器自动刷新
gulp.task('browser-sync',function(){
	browserSync.init({
        server: {
            baseDir: "./dist"// 从这个项目的src目录启动服务器
        }
    });
    gulp.watch("./dist/*.html").on('change', browserSync.reload);//监听html文件变化 自动刷新浏览器
});

//监听文件变化 执行任务
gulp.task('watch',function(){
	// gulp.watch(['./src/less/*.less','./src/*.html'],['handleCss']);
	gulp.watch(['./src/less/*.less','./src/*.html'],function(){
		gulp.start('handleCss');
	});
});



// 同步执行任务 顺序执行  less -> minify-css  这里如果执行clean任务会报错 猜测应该是
gulp.task('handleCss',function(){
	return runSequence('minify-css','rev');  //异步执行  ['a','b']
});



// 开发   监听文件变化  刷新浏览器
gulp.task('serve',['watch','browser-sync']);


// build构建
// runSequence按顺序同步执行任务 
var runSequence = require('run-sequence');
gulp.task('build', function() {
  return runSequence('clean','minify-css','rev');
});




// js文件压缩
var uglify = require('gulp-uglify'); 
gulp.task('minify-js',function(){
	 gulp.src('src/js/*.js')
	 	.pipe(uglify())  
	 	.pipe(gulp.dest('dist/js'));
});

// html压缩
var htmlmin = require('gulp-htmlmin');
gulp.task('minify-html', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});


// 图片压缩
var imagemin = require('gulp-imagemin');
gulp.task('minify-img', function() {
  return gulp.src('src/images/*.{png,jpg,gif,ico}')
    .pipe(imagemin({
            optimizationLevel: 4, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
    .pipe(gulp.dest('dist/images'));
});


// gulp-cache  图片缓存


// js合并
// 减少http请求数量
var concat = require('gulp-concat');
gulp.task('jsconcat', function () {
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))//合并后的文件名
        .pipe(gulp.dest('dist/js'));
});


// -----------------


// 文件监听 发生改变
gulp.task('test-watch',function(){
	gulp.watch('./src/index.html').on('change', function(event) {
	  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
});



// 同时执行多个任务
gulp.task('n1',function(){
	console.log("执行任务n1")
});
gulp.task('n2',function(){
	console.log("执行任务n2")
});
gulp.task('N',['n1','n2']);


// 任务存在依赖关系
gulp.task('B',function(){
	console.log("执行任务B")
});
gulp.task('A',['B'],function(){
	console.log("任务B执行完成之后，开始执行任务A")
});

// 默认执行  gulp
gulp.task('default', function() {
     console.log("执行第一个gulp任务")
});




// 实现头尾公共页面部分复用
var fileinclude  = require('gulp-file-include');
gulp.task('fileinclude', function() {
    // 适配page中所有文件夹下的所有html，排除page下的include文件夹中html
    gulp.src(['src/page/**/*.html','!src/page/include/**.html'])
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
    .pipe(gulp.dest('dist'));
});