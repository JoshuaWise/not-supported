'use strict';
var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var addsrc = require('gulp-add-src');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var modernizr = require("modernizr");

var modernizrConfig = JSON.parse('' + fs.readFileSync('./modernizr/config.json'));
var modernizrDestPath = './modernizr/modernizr-build.js';
var sourcePath = './src/index.js';
var destPath = './build/not-supported.js';

gulp.task('build-modernizr', function (done) {
	modernizr.build(modernizrConfig, function (result) {
		fs.writeFile(modernizrDestPath, result, function (err) {
			if (err) throw err;
			done();
		});
	});
});

gulp.task('build', ['build-modernizr'], function() {
	return browserify(sourcePath, {debug: true}).bundle()
		.pipe(source(sourcePath))
		.pipe(buffer())
		.pipe(addsrc.prepend(modernizrDestPath))
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(concat(path.basename(destPath)))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(path.dirname(destPath)))
});

gulp.task('build-min', ['build-modernizr'], function() {
	return browserify(sourcePath).bundle()
		.pipe(source(sourcePath))
		.pipe(buffer())
		.pipe(addsrc.prepend(modernizrDestPath))
		.pipe(concat(path.basename(destPath)))
		.pipe(uglify({
			compress: {
				unsafe: false,
				screw_ie8: true
			},
			mangle: {
				keep_fnames: true,
				screw_ie8: true,
			},
			output: {
				comments: /@license|@preserve/i
			}
		}))
		.pipe(rename(function (p) {p.basename += '.min';}))
		.pipe(gulp.dest(path.dirname(destPath)));
});

gulp.task('default', ['build', 'build-min']);

gulp.task('watch', ['default'], function () {
	gulp.watch(['./src/**/*.js', './modernizr/**/*.json'], ['default']);
});
