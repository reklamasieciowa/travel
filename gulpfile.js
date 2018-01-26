var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');

gulp.task('default', function(){
	console.log('ok');
});

gulp.task('html', function(){
	console.log('html fc done');
});

gulp.task('styles', function(){
	//plik żródłowy, plik docelowy temp, gulp.src() jest asynchroniczna
	
	return gulp.src('./app/assets/styles/style.css') //plik żródłowy
		.pipe(postcss([cssvars, nested, autoprefixer])) //postcss zamiast sass/less
		.pipe(gulp.dest('./app/temp/styles')); //folder docelowy temp
});

gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html'); // start('nazwa_taska')
	});

	watch('./app/assets/styles/**/*.css', function(){ // *.css w folderze
		gulp.start('styles'); // start('nazwa_taska')
	});
});