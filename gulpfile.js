'use strict';
var path = require('path');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var browserify = require('browserify');
var uglify = require('gulp-uglify');

var sourcePath = './src/index.js';
var destPath = './build/not-supported.js';

gulp.task('build', function() {
	return browserify(sourcePath, {debug: true}).bundle()
		.pipe(source(sourcePath))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(rename(path.basename(destPath)))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(path.dirname(destPath)))
});

gulp.task('build-min', function() {
	return browserify(sourcePath).bundle()
		.pipe(source(sourcePath))
		.pipe(buffer())
		.pipe(rename(path.basename(destPath)))
		.pipe(uglify({
			compress: {
				unsafe: false
			},
			mangle: {
				keep_fnames: true,
				screw_ie8: true,
			}
		}))
		.pipe(rename(function (p) {p.basename += '.min';}))
		.pipe(gulp.dest(path.dirname(destPath)));
});

gulp.task('default', ['build', 'build-min']);

gulp.task('watch', ['default'], function () {
	gulp.watch(['./src/**/*.js'], ['default']);
});
