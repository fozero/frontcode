/*
* @Author: fozero@126.
* @Date:   2019-03-27 17:08:03
* @Last Modified by:   fozero
* @Last Modified time: 2019-04-25 20:15:02
*/
var gulp = require('gulp'),
  clean = require('gulp-clean'),
  rev = require('gulp-rev'),
  sass = require('gulp-sass'),
  urlPrefixer = require('gulp-url-prefixer'),
  pxtoviewport = require('postcss-px-to-viewport'),
  aspectratiomini = require('postcss-aspect-ratio-mini'),
   sassVariables = require('gulp-sass-variables'),
  viewportunits = require('postcss-viewport-units'),
  writesvg = require('postcss-write-svg'),
  revCollector = require('gulp-rev-collector'),          //- 路径替换
  autoprefixer = require('autoprefixer'),
  // 清空文件
  del  = require('del')   //-删除文件及目录
  // browser-sync浏览器自动刷新
  browserSync = require('browser-sync').create();//-开启静态服务，浏览器自动刷新
  postcss = require('gulp-postcss');


  var mSrc = 'resources/m/';
var mDist = 'public/m/';


var normalUrl = {
  'dev': '',
  'test': '',
  'prod': '',
}

var env = process.env.NODE_ENV;

var mPathToCdn = function() {
  //var host = env === 'prod'|| env === 'pre'  ? `https://s01.xiaopeng.com/www/${ver}/m/img/` : `/public/m/img/`;
  var host = '../img/';
  return host;
};

/**
* 清空目录（build）
*/
gulp.task('m:clean',function(){
  return del(['public/m'],{force: true});
})


// 根据生成的rev-manifest.json文件  文件引用路径替换  **表示多层目录
gulp.task('m:revHtml',['m:sass'], function () {
    return gulp.src(['./public/**/*.json', './**/*.html'])
        .pipe( revCollector({
        	replaceReved: true
        }))
        .pipe( gulp.dest('./') );
        // .pipe( gulp.dest('./dist') );
});


gulp.task('m:copy', function() {
  return gulp.src([mSrc + 'img/**/*', mSrc + 'lib/**/*',mSrc + 'audio/**/*'], { base: mSrc })
  .pipe(gulp.dest(mDist));
});

gulp.task('m:sass', function () {
  var processors = [
    autoprefixer(),
    pxtoviewport({
      viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false // 允许在媒体查询中转换`px`
    }),
    aspectratiomini(),
    writesvg({
      utf8: false
    }),
    viewportunits()
  ];
  return gulp.src(mSrc + 'scss/**/*.scss')
    .pipe(sassVariables({
      $path: normalUrl[env]  
      }))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(rev())// 文件名加MD5后缀
    .pipe(gulp.dest(mDist + 'css'))
    .pipe(urlPrefixer.css({prefix: mPathToCdn}))
    .pipe(gulp.dest(mDist + 'css'))
    .pipe(postcss(processors))
    .pipe(gulp.dest(mDist + 'css'))
    .pipe(rev.manifest())//生成一个rev-manifest.json    后面的文件路径替换依据此文件内容
    .pipe(gulp.dest(mDist + 'css'));
});

/**
* 浏览器自动刷新  设备同步刷新
* 静态服务器 + 监听 less/html 文件
*/
gulp.task('m:pageReload',function(){
	browserSync.init({
        server: {
            baseDir: "./"// 从这个项目的src目录启动服务器
        }
    });
    gulp.watch("./**/*.html").on('change', browserSync.reload);//监听html文件变化 自动刷新浏览器
});

// 开始任务 清理-》文件拷贝-》scss编译-》html资源路径替换
gulp.task('m:start',['m:clean'],function(){
	gulp.start('m:revHtml','m:copy');
})
gulp.task('m:build', function() {
  gulp.start('m:start');
});
gulp.task('m:dev', function() {
  gulp.start(['m:build','m:pageReload']);
  gulp.watch('resources/m/**/*.*', function() {
    gulp.start(['m:build']);
  });
});





