var gulp = require('gulp'), // Подключаем Gulp
		sass = require('gulp-sass'), // Подключаем Sass пакет
		tysc = require('gulp-typescript');  // Подключаем typescript пакет


gulp.task('sass', function() { // Создаем таск "sass"
	return gulp.src(['scss/**/*.sass', 'scss/**/*.scss']) // Берем источник
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(gulp.dest('css')) // Выгружаем результат в папку css
	});
gulp.task('ts', function() { // Создаем таск "ts"
	return gulp.src(['ts/**/*.ts']) // Берем источник
		.pipe(tysc({noImplicitAny: true})) // Преобразуем ts в js посредством gulp-ts
		.pipe(gulp.dest('js')) // Выгружаем результат в папку js
	});

gulp.task('watch', function() {
	gulp.watch(['scss/**/*.sass', 'scss/**/*.scss',], gulp.series('sass'));// Наблюдение за sass файлами в папке sass
	gulp.watch(['ts/**/*.ts'], gulp.series('ts'));
	});

gulp.task('default', gulp.series('watch'));
