var gulp = require('gulp'),
	browserSync = require('browser-sync').create(), // live browser
	autoprefixer = require('gulp-autoprefixer'), // css autoprefix
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
	plumber = require('gulp-plumber'),
	concat = require('gulp-concat'),
	jade = require('gulp-jade'),
	uglifycss = require('gulp-uglifycss'),
	notify = require('gulp-notify'),
	concatCss = require('gulp-concat-css'),
	uglify = require('gulp-uglify');

// sfn = source folder name
// bfn = build folder name
var sfn = 'src/',
	sfn_sass = 'sass/',
	sfn_js = 'js/',
	sfn_jade = 'jade/',
	//sfn_img = 'images/',
	bfn = 'build/',
	bfn_css = 'styles/',
	//bfn_img = 'images/',
	bfn_js = 'scripts/';



// CSS processing
gulp.task('styles', function () {
	return gulp.src(sfn + sfn_sass + '*.sass')
		.pipe(plumber({
			errorHandler: notify.onError({
				title: 'Gulp',
				message: 'Error: <%= error.message %>'
			})
		}))
		.pipe(sass({includePaths:['./sass'], outputStyle:'expanded'}).on('error', sass.logError))
		.pipe(plumber.stop())
		.pipe(rename('style.css'))
		.pipe(gulp.dest(bfn + bfn_css))  //css file for development
		//.pipe(notify({ message: 'SASS converted to CSS' }))
		.pipe(browserSync.stream());
});

// concating css
gulp.task('concatCss', ['styles'], function () {
	return gulp.src(bfn + bfn_css + '*.css')
		.pipe(concatCss('main.css'))
		.pipe(autoprefixer('last 7 version', '> 1%', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(uglifycss({maxLineLen:500, expandVars:true, uglyComments:true}))
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('././' + bfn + 'style-min/'))
		//.pipe(notify({ message: 'CSS concat with prefixes' }))
		.pipe(browserSync.stream());
});


// Script processing
gulp.task('scripts', function () {
	return gulp.src(sfn + sfn_js + '*.js')
		.pipe(concat('scripts.js'))
		.pipe(uglify())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('././' + bfn + bfn_js))
		//.pipe(notify({ message: 'script files minified' }))
		.pipe(browserSync.stream());
});


//jade
gulp.task('templates', function () {
	return gulp.src(sfn + sfn_jade + '*.jade')
		.pipe(plumber({
			errorHandler: notify.onError({
				title: 'Gulp',
				message: 'Error: <%= error.message %>'
			})
		}))
		.pipe(jade({
			pretty: '\t'
		}))
		.pipe(gulp.dest('././build/'))
		//.pipe(notify({ message: 'jade converted to html' }))
		.pipe(browserSync.stream());
});


gulp.task('serve', function () {
	browserSync.init({
		server:{
			baseDir: ''
		},
		online: false
	});

	gulp.watch( [sfn + sfn_sass + '*.sass', sfn + sfn_sass + '**/*.sass'], ['concatCss']);
	gulp.watch( sfn + sfn_js + '*.js', ['scripts']);
	gulp.watch([ sfn + sfn_jade + '*.jade', sfn + sfn_jade + '**/*.jade'], ['templates']);
	// gulp.watch('src/templates/*.jade').on('change', browserSync.reload);
});


//initial tasks
gulp.run('styles', 'concatCss', 'scripts', 'templates');

gulp.task('default', ['serve']);