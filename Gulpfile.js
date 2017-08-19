var gulp = require('gulp');
var gulpsass = require('gulp-sass');
var gulp_rename = require('gulp-rename');
var babel = require('babelify');
var preset = require('babel-preset-es2015');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

gulp.task('style', function () {
	gulp
		.src('index.scss')
		.pipe(gulpsass())
		.pipe(gulp_rename('app.css'))
		.pipe(gulp.dest('public'));
})

gulp.task('assets', function() {
	gulp
		.src('assets/*')
		.pipe(gulp.dest('public'));
})

function compile(watch){
	var bundle = browserify('./src/index.js');

	if(watch){
		watchify(bundle).on('update', function(){
			console.log('--> Bundling ...');
			rebundle();
		});	
	}

	function rebundle() {
		bundle
			.transform(babel, { presets:['es2015'], plugins:['syntax-async-functions', 'transform-regenerator']})
			.bundle()
			.on('error', function (err) { console.log(err); this.emit('end') })
			.pipe(source('index.js'))
			.pipe(gulp_rename('app.js'))
			.pipe(gulp.dest('public'));
	}

	rebundle();
}

gulp.task('build', function(){
	return compile();
});

gulp.task('watch', function(){
	return compile(true);
});

gulp.task('default', ['style','assets','build']);