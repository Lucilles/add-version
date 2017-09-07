var gulp = require('gulp');
var rev = require('gulp-rev-append');


gulp.task('rev',function(){
	return gulp.src('html/*.html')
	       .pipe(rev())
	       .pipe(gulp.dest('dist'));
});

gulp.task('default',['rev']);


