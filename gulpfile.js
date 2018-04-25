const gulp = require('gulp');
const babel = require('gulp-babel');
const print = require('gulp-print');
const install = require('gulp-install');
const yarn = require('gulp-yarn');
const dotenv = require('gulp-dotenv');
const clean = require('gulp-clean');
const nodemon = require('gulp-nodemon');
const runSequence = require('run-sequence');
const babelPolyfill = require("babel-polyfill");

/*
 Gulp tasks that install and add required packages, libraries, and environmental variables
 */

gulp.task('libs', function(){
	return gulp.src([
			'node_modules/systemjs/dist/system.js',
			'node_modules/babel-polyfill/dist/polyfill.js'])
		.pipe(print())
		.pipe(gulp.dest('dist/server/libs'));
});

// gulp.task('npm:install', function() {
// 	return gulp.src(['package.json'])
// 		.pipe(install({
// 			allowRoot: true
// 		}))
// 		.pipe(print())
// 		.pipe(gulp.dest('dist/server'));
// });

// gulp.task('yarn', function() {
// 	return gulp.src(['./package.json', './yarn.lock'])
// 		.pipe(gulp.dest('./dist'))
// 		.pipe(yarn())
// 		.pipe(print());
// });

gulp.task('yarn', function() {
	return gulp.src(['./package.json'])
		.pipe(print())
		.pipe(yarn());
});

gulp.task('env:dev', function() {
	return gulp.src('.env')
		.pipe(dotenv())
		.pipe(print())
		.pipe(gulp.dest('dist/server'));
});

gulp.task('utilityFiles', function() {
	return gulp.src(['src/**/*.json'])
		.pipe(print())
		.pipe(gulp.dest('dist/server'))
});
/*
 Gulp tasks to build backend & frontend (Refer above for frontend) and place builds in  dist directory
 */

gulp.task('build:server', ['libs', 'yarn', 'env:dev', 'utilityFiles'], function() {
	return gulp.src(['src/**/*.js'])
		.pipe(print())
		.pipe(babel())
		.pipe(gulp.dest('dist/server'));
});

gulp.task('watch:server', ['clean', 'build:server'], function() {
	"use strict";
	
	return nodemon({
		script: 'dist/server/app.js',
		watch: 'server',
		tasks: ['build:server']
	});
});

/*
 Gulp task to delete dist directory
 */

gulp.task('clean', function() {
	return gulp.src('dist', {read: false})
		.pipe(clean())
		.pipe(print());
});
/*
 Gulp default task: current running only for backend
 */
gulp.task('default', ['build:server', 'watch:server']);