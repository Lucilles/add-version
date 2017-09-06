var gulp =require('gulp'),
    runSequence = require('run-sequence'),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector');

//定义css.js源文件位置
var cssSrc = 'css/*.css',
    jsSrc = 'js/*.js';

//css生成文件hash编码并生成rev-manifest.json文件名对照映射
gulp.task('revCss',function(){
	return gulp.src(cssSrc)
	       .pipe(rev())
	       .pipe(rev.manifest())
	       .pipe(gulp.dest('rev/css'));
});

gulp.task('revJs',function(){
	return gulp.src(jsSrc)
	       .pipe(rev())
	       .pipe(rev.manifest())
	       .pipe(gulp.dest('rev/js'));
});

//html替换css，js文件版本
gulp.task('revHtml',function(){
	return gulp.src(['rev/**/*.json','View/*.html'])
		   .pipe(revCollector())
		   .pipe(gulp.dest('View'));
})

//开发构建
gulp.task('dev',function(done){
	condition = false;
	runSequence(
		['revCss'],
		['revJs'],
		['revHtml'],
		done)
});

gulp.task('default',['dev']);




