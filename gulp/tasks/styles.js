var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba');

gulp.task('styles', function(){
	//plik żródłowy, plik docelowy temp, gulp.src() jest asynchroniczna
	
	return gulp.src('./app/assets/styles/style.css') //plik żródłowy
		.pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer])) //postcss zamiast sass/less
		.on('error', function(errorInfo){
			console.log(errorInfo.toString());
			this.emit('end'); // jak będzie error, to uznaj, że koniec funkcji, a nie wywal się
		})
		.pipe(gulp.dest('./app/temp/styles')); //folder docelowy temp
});