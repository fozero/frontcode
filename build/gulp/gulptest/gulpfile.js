
/*
* @Author: fozero@126.com
* @Date:   2018-09-30 11:05:10
* @Last Modified by:   fozero
* @Last Modified time: 2018-09-30 11:52:04
*/

var gulp = require('gulp');
var sass = require('gulp-sass');
//添加浏览器前缀
const autoprefixer = require('gulp-autoprefixer');

var sassSrcPath = './sass/**/*.scss';
var sassDestPath = './css';

// sass编译
gulp.task('sass', function () {
  return gulp.src(sassSrcPath)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest(sassDestPath));
});

//监听文件变化 执行任务
gulp.task('watch',function(){
	gulp.watch([sassSrcPath],['sass']);
});


// 开发及生产
gulp.task('dev',['watch']);
gulp.task('build',['sass']);


// 默认task  gulp
gulp.task('default', function() {

});