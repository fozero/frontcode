
/*
* @Author: fozero@126.com
* @Date:   2018-09-30 11:05:10
* @Last Modified by:   fozero
* @Last Modified time: 2018-09-30 19:00:29
*/

var gulp = require('gulp');

/**
 * sass编译  浏览器前缀
 * @type {[type]}
 */
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');//添加浏览器前缀
var sassSrcPath = './sass/**/*.scss';
var sassDestPath = './css';
gulp.task('sass', function () {
  return gulp.src(sassSrcPath)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest(sassDestPath));
});


/**
 * js压缩
 * @type {[type]}
 */
var uglify = require('gulp-uglify');
var jsSrcPath = './resource/*.js';
var jsDestPath = './js';
gulp.task('jsmin',function(){
	gulp.src(jsSrcPath)
        .pipe(uglify())
        .pipe(gulp.dest(jsDestPath));
});



/**
 * 监听文件变化 执行任务
 */
gulp.task('watch',function(){
	gulp.watch([sassSrcPath,jsSrcPath],['sass','jsmin']);
});


// 开发及生产
gulp.task('dev',['watch']);
gulp.task('build',['sass','jsmin']);


// 默认task  gulp
gulp.task('default', function() {

});